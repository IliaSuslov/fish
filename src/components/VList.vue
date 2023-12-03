<script setup>
import { ref, watch, defineProps } from 'vue'
import { Card, Button } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { fetchData, BASEURL } from '../utils'

const route = useRoute()
const items = ref([])
const nextPage = ref('')
const props = defineProps(['endpoint'])
const onLoadMore = async () => {
  const { response, error } = await fetchData(nextPage.value)
  items.value = [...items.value, ...response.results]
  nextPage.value = response.info.next
  error && console.error(error)
}

watch(route, async () => {
  const { response, error } = await fetchData(`${BASEURL}/${props.endpoint}${route.fullPath}`)
  items.value = response.results
  nextPage.value = response.info.next
  error && console.error(error)
})
</script>
<template>
  <div v-if="items.length === 0" class="error">No data</div>
  <div v-else>
    <div class="container">
      <Card hoverable v-for="(item, i) in items" :key="i" class="item">
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
    </div>
    <Button v-show="nextPage !== null" @click="onLoadMore">Загрузить еще</Button>
  </div>
</template>

<style scoped>
.main {
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
}
.container {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  row-gap: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
}
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
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80svh;
}
</style>
