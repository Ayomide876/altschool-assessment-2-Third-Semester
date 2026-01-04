<script setup lang="ts">
import { marked } from 'marked'
import { computed } from 'vue'


const props = defineProps <{
    markdownText: string;
}>();

const htmlPreview = computed(() => {
    if (!props.markdownText) return " ";
    return marked.parse(props.markdownText)
})

</script>

<template>
  <div class="flex flex-col h-full p-4 overflow-y-auto">
    <h2 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
    Preview
    </h2>
    
    <div
      class="prose lg:prose-xl dark:prose-invert max-w-none flex-grow p-3"
      v-html="htmlPreview"
    ></div>
  </div>
</template>

<style scoped>
:deep(.prose) {
  max-width: 100%;
}

:deep(pre) {
  background-color: #1f2937; 
  color: #f9fafb;
  padding: 1.25rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  overflow-x: auto;
}

:deep(code) {
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
}

:deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
</style>