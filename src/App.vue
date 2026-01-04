<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="bg-white shadow p-4 flex gap-4">
    <h1 class="font-bold">Markdown Preview App</h1>
    <div class="ml-auto flex gap-4">
      <RouterLink to="/" class="hover:text-indigo-600" active-class="font-bold text-indigo-600">
        Home
      </RouterLink>
      <RouterLink to="/error-test" class="hover:text-indigo-600" active-class="font-bold text-indigo-600">
        Error Test
      </RouterLink>
    </div>
  </nav>

  <RouterView />
</template>