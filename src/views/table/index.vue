<template>
  <div class="app-container">

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <el-table-column label="ID" width="160">
        <template slot-scope="scope">
          {{ scope.row.no }}
        </template>
      </el-table-column>
      <el-table-column label="历史" align="center">
        <!--<template v-for = "n in scope.row.hisno" >
          {{ n }}
        </template>-->
        <template slot-scope="scope">
          <div
            v-for="n in scope.row.hisno1"
            :key="n"
            class="hisno">
            {{ n }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="计划" width="160" align="center">
        <template slot-scope="scope">
          <div
            v-for="n in scope.row.plan"
            :key="n">
            <div v-if="n == 1" class="hisno">{{ n }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="80" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.flag | statusFilter">{{ scope.row.flag }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<div id="app">
  <ul>
    <li v-for="value in object">
      {{ value }}
    </li>
  </ul>
</div>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList('bbbb').then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .hisno{
    width: 32px;
    height: 32px;
    border-radius: 16px;
    float: left;
    background-color: greenyellow;
    text-align: center;
    line-height: 32px;
    margin-left: 10px;
  }
</style>
