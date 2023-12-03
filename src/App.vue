<script setup>
import VFilters from './components/VFilters.vue'
import VList from './components/VList.vue'
</script>
<template>
  <main class="main">
    <VFilters />
    <VList endpoint="character" />
  </main>
</template>

<style scoped>
.main {
  text-align: center;
  padding: 1rem;
}
</style>
