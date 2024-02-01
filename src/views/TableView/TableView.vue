<template>
  <GTable v-bind="{ 'table-data': tableData, 'table-columns': tableColumns }">
    <template #operationTpl="{ row }">
      <el-button type="primary" link @click="onEdit(row)">编辑</el-button>
    </template>
  </GTable>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GTable from '@/components/GTable.vue'
import { getData } from '@/apis/table'

const tableData = ref([])
const tableColumns = ref([
  {
    title: 'aName',
    code: 'a',
    tpl: 'timeTpl'
  },
  {
    title: 'bName',
    code: 'b',
    tpl: 'switchTpl'
  },
  {
    title: 'cName',
    code: 'c'
  },
  {
    title: 'dName',
    code: 'd'
  },
  {
    title: '操作',
    code: '',
    tpl: 'operationTpl'
  }
])

onMounted(() => {
  getData().then((res: any) => {
    tableData.value = res.data
  })
})

const onEdit = (row: any) => {
  console.log(row)
}
</script>
