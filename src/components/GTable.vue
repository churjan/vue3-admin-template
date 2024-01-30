<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="column in tableColumns"
      :key="column.code"
      :prop="column.code"
      :label="column.title"
    >
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
defineProps({
  tableData: {
    type: Array<any>,
    default: () => []
  },
  tableColumns: {
    type: Array<any>,
    default: () => []
  }
})
</script>
