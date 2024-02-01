<template>
  <el-table :data="tableData" style="width: 100%" v-bind="$attrs">
    <el-table-column
      v-for="column in tableColumns"
      :key="column.code"
      v-bind="{ prop: column.code, label: column.title }"
    >
      <template #default="{ row }">
        <template v-if="!column.tpl">
          {{ row[column.code] }}
        </template>
        <template v-else-if="column.tpl === 'timeTpl'">
          {{ dayjs(row[column.code]).format('YYYY-MM-DD HH:mm:ss') }}
        </template>
        <template v-else-if="column.tpl === 'switchTpl'">
          <el-tag type="success" v-if="row[column.code]">是</el-tag>
          <el-tag type="info" v-if="!row[column.code]">否</el-tag>
        </template>
        <template v-else>
          <slot :name="column.tpl" :row="row"></slot>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { dayjs } from 'element-plus'

defineOptions({
  inheritAttrs: false
})
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
