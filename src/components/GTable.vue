<template>
  <div class="page-view">
    <div class="filter-view mb16">
      <el-input
        v-model="keywords"
        placeholder="请输入关键词"
        style="width: 300px"
        @keyup.enter="onSearch"
      />
      <el-button type="primary" class="ml8" @click="onSearch">查询</el-button>
      <el-button class="ml8" @click="onReset">重置</el-button>
    </div>
    <el-table v-loading="loading" :data="tableData" style="width: 100%" v-bind="$attrs">
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
    <div class="mt16 flex-view flex-end">
      <el-pagination
        background
        layout="sizes, prev, pager, next,jumper,total"
        :page-sizes="[5, 10, 15, 20]"
        v-model:current-page="pageIndex"
        v-model:page-size="pageSize"
        :total="total"
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { dayjs } from 'element-plus'
import { getData } from '@/apis/table'

defineOptions({
  inheritAttrs: false
})
const props = defineProps({
  tableConfig: {
    type: Object,
    default: () => {}
  },
  tableColumns: {
    type: Array<any>,
    default: () => []
  }
})

const tableData = ref([])
const loading = ref(false)
const pageSize = ref(5)
const pageIndex = ref(1)
const total = ref(0)
const keywords = ref('')

onMounted(() => {
  fetchList()
})

function getParams() {
  const params = { _limit: pageSize.value, _page: pageIndex.value, id: keywords.value || null }
  return params
}

function fetchList() {
  loading.value = true
  const params = getParams()
  getData(props.tableConfig.url, params)
    .then((res: any) => {
      total.value = Number(res.headers.get('x-total-count'))
      tableData.value = res.data
    })
    .finally(() => {
      loading.value = false
    })
}

function onSizeChange() {
  pageIndex.value = 1
  fetchList()
}

function onCurrentChange() {
  fetchList()
}

function onSearch() {
  pageIndex.value = 1
  fetchList()
}

function onReset() {
  keywords.value = ''
  pageIndex.value = 1
  fetchList()
}
</script>

<style lang="scss" scoped>
.page-view {
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  .filter-view {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .table-view {
    flex: 1;
    overflow: hidden;
  }

  .pagination-view {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
