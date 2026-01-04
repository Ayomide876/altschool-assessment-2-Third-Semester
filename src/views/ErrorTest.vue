<script setup lang="ts">
import { ref } from 'vue';
import ErrorBoundary from '../components/ErrorBoundary.vue';
import BuggyComponent from '../components/BugComponent.vue';

const shouldCrash = ref(false);
</script>

<template>
  <div class="p-8 text-center">
    <h1 class="text-3xl font-bold mb-6">Error Boundary Test</h1>
    
    <ErrorBoundary>
      <BuggyComponent v-if="shouldCrash" />
      
      <div v-else>
        <p class="mb-8 text-gray-600">Click below to simulate a component crash.</p>
        <button 
          @click="shouldCrash = true"
          class="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition"
        >
          Trigger Crash!
        </button>
      </div>
    </ErrorBoundary>
  </div>
</template>