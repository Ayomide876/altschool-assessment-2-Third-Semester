<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    modelValue: string
}>();

const emit = defineEmits <{
    (e: 'update:modelValue', value: string): void;
    (e: 'fileLoad', content: string): void;
    (e: 'download'): void
}>();

const fileInput = ref<HTMLInputElement | null>(null);

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      emit('fileLoad', content);
    };
    reader.readAsText(file);
  }
};

</script>

<template>
  <div class="flex flex-col h-full p-4 border-r border-gray-300 dark:border-gray-700">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Editor</h2>
      <div class="space-x-2">
        <input type="file" ref="fileInput" class="hidden" accept=".md" @change="handleFileChange" />
        <button @click="fileInput?.click()" class="px-3 py-1 bg-green-600 text-white rounded text-sm">Load</button>
        <button @click="$emit('download')" class="px-3 py-1 bg-blue-600 text-white rounded text-sm">Save</button>
      </div>
    </div>
    
    <textarea
      class="w-full flex-grow p-4 border rounded-lg font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      placeholder="Type your markdown here..."
    ></textarea>
  </div>
</template>

<style scoped>
    
</style>