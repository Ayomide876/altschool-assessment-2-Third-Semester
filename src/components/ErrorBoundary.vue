<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';

const error = ref<Error | null>(null);


onErrorCaptured((err) => {
  error.value = err as Error;
  return false;
});
</script>

<template>
  <div v-if="error" class="p-8 text-center bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200">
    <h2 class="text-2xl font-bold text-red-600 mb-2">Something went wrong</h2>
    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ error.message }}</p>
    <button 
      @click="error = null" 
      class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Try Again
    </button>
  </div>
  
  <slot v-else />
</template>