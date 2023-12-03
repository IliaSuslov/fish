<script setup>
import { Card } from 'ant-design-vue'
defineProps(['item'])
</script>
<template>
  <Card hoverable class="item">
    <template #cover>
      <img :src="item.image" alt="item_image" class="image" />
    </template>
    <a-card-meta :title="item.name" class="label">
      <template #description>
        <p>Status: {{ item.status }}</p>
        <p>Gender: {{ item.gender }}</p>
      </template>
    </a-card-meta>
    <p>Episodes:</p>
    <div class="episodes">
      <div v-for="(ep, i) in item.episode" :key="i">
        <p>{{ ep }}</p>
      </div>
    </div>
  </Card>
</template>
<style scoped>
.item {
  margin: 0 auto;
}
.image {
  height: 300px;
}
.episodes {
  height: 90px;
  overflow-y: auto;
}
</style>
