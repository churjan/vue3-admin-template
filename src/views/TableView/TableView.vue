<template>
  <GTable v-bind="{ tableColumns, tableConfig }">
    <template #operationTpl="{ row }">
      <el-button type="primary" link @click="onEdit(row)">编辑</el-button>
    </template>
  </GTable>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import GTable from '@/components/GTable.vue'

const tableConfig = reactive({
  url: 'https://jsonplaceholder.typicode.com/users'
})
const tableColumns = ref([
  {
    title: '邮箱',
    code: 'email'
  },
  {
    title: 'id',
    code: 'id'
  },
  {
    title: '姓名',
    code: 'name'
  },
  {
    title: '电话',
    code: 'phone'
  },
  {
    title: '用户名',
    code: 'username'
  },
  {
    title: '网站',
    code: 'website'
  },

  {
    title: '操作',
    code: '',
    tpl: 'operationTpl'
  }
])

function onEdit(row: any) {
  console.log(row)
}
</script>
