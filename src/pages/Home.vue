<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useStorage } from '../composables/useStorage.ts';
import MarkdownEditor from '../components/MarkdownEditor.vue';
import MarkdownPreview from '../components/MarkdownPreview.vue';

const DEFAULT_CONTENT = ` # Welcome to the  Markdown Previewer!
A markdown preview application that renders markdown content into HTML with:
- **Real-time Rendering**
&
- *Responsive Design*

Here, you can have your Markdown content rendered into HTML in the preview panel by the side

This text serves as an example of its rendering capabilites of common markdown elements such as:
- ## Headings
- Paragraphs
- Lists
- **bold**/*italic*
- [Links](https://google.com)

And Code Blocks

\`\`\`javascript
const greeting = 'Hello, World!';
console.log(greeting);
\`\`\`
`
const markdown = useStorage<string>('markdown-editor-vue-v2', DEFAULT_CONTENT);
const view = ref<'editor' | 'preview'>('editor')

// 2. Fix: Define windowWidth and update it on resize
const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});

const handleFileLoad = (content: string) => {
    markdown.value = content
}

const handleDownload = () => {
    const blob = new Blob([markdown.value],{type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a  = document.createElement('a')
    a.href =url
    a.download = 'my-vue-markdown.md'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    
    <div class="md:hidden flex justify-around border-b border-gray-200 dark:border-gray-700">
      <button
        @click="view = 'editor'"
        :class="['w-1/2 p-3 font-semibold transition-colors', 
                 view === 'editor' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700 dark:bg-gray-800']"
      >
        Editor
      </button>
      <button
        @click="view = 'preview'"
        :class="['w-1/2 p-3 font-semibold transition-colors', 
                 view === 'preview' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700 dark:bg-gray-800']"
      >
        Preview
      </button>
    </div>

    <div class="flex flex-grow h-full">
      
      <div 
        v-show="view === 'editor' || windowWidth >= 768"
        class="w-full md:w-1/2 h-full flex-shrink-0 border-r"
      >
        <MarkdownEditor 
          v-model="markdown"
          @fileLoad="handleFileLoad"
          @download="handleDownload"
        />
      </div>

      <div 
        v-show="view === 'preview' || windowWidth >= 768"
        class="w-full md:w-1/2 h-full flex-shrink-0"
      >
        <MarkdownPreview :markdownText="markdown" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>