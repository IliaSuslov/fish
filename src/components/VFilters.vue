<script setup>
import { ref, watchEffect } from 'vue'
import { Button } from 'ant-design-vue'
import VDropDown from './VDropDown.vue'
import { genderItems, statusItems } from '../utils'
import { useRoute } from 'vue-router'
import { router } from '../main'

const route = useRoute()

const status = ref('')
const gender = ref('')

watchEffect(() => {
  status.value = route.query.status ?? 'Status'
  gender.value = route.query.gender ?? 'Gender'
})

const setFilterItem = ({ key, value }) => {
  if (key === 'gender') {
    gender.value = value
  }
  if (key === 'status') {
    status.value = value
  }
}
const clearFilters = () => {
  router.replace('/')
}
const setFilters = () => {
  const query = {}

  if (gender.value !== 'Gender') {
    query.gender = gender.value
  }

  if (status.value !== 'Status') {
    query.status = status.value
  }

  router.push({ query })
}
</script>
<template>
  <div class="container">
    <div class="filters">
      <VDropDown type="gender" :value="gender" :items="genderItems" @setItem="setFilterItem" />
      <VDropDown type="status" :value="status" :items="statusItems" @setItem="setFilterItem" />
    </div>
    <div class="filterControls">
      <Button @click="setFilters" type="primary">Применить</Button>
      <Button @click="clearFilters" danger>Сбросить фильтры</Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.filters {
  display: flex;
  gap: 1rem;
}
.filterControls {
  display: flex;
  gap: 1rem;
}
@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;
  }
  .filters {
    display: flex;
    gap: 1rem;
  }
  .filterControls {
    display: flex;
    gap: 1rem;
  }
}
</style>
