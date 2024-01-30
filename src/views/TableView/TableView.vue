<template>
  <GTable v-bind="{ 'table-data': tableData, 'table-columns': tableColumns }" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GTable from '@/components/GTable.vue'
import { getData } from '@/apis/table'

const tableData = ref([])
const tableColumns = ref([
  {
    title: 'aName',
    code: 'a'
  },
  {
    title: 'bName',
    code: 'b'
  },
  {
    title: 'cName',
    code: 'c'
  },
  {
    title: 'dName',
    code: 'd'
  }
])

onMounted(() => {
  getData().then((res: any) => {
    tableData.value = res.data
  })
})
</script>
