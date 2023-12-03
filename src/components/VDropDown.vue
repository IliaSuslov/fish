<script setup>
import { DownOutlined } from '@ant-design/icons-vue'

const props = defineProps(['type', 'value', 'items'])
const emit = defineEmits(['setItem'])
const action = (value) => emit('setItem', { key: props.type, value })
</script>
<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      {{ value }}
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item v-for="(item, i) in items" :key="i">
          <a href="javascript:;" @click.prevent="action(item.value)">{{ item.label }}</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
