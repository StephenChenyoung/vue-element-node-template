<template>
  <div class="app-container">
    <el-row>
      <a href="#/form/index"><el-button plain>新增</el-button></a>
    </el-row>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading..."
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="序号" width="50">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="功能" align="center">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="名字" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="注册时间" width="220" align="center">
        <template slot-scope="scope">
          {{ scope.row.create_time }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="360">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleEdit(scope.id, scope.row)">申请</el-button>
          <el-button circle type="primary" icon="el-icon-edit" @click="handleEdit(scope.id, scope.row)" />
          <el-button circle type="danger" icon="el-icon-delete" @click="handleDelete(scope.id, scope.row)" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
/* import { getList } from '@/api/mytable_data' */
import { getTable } from '@/api/mytable_data'

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
    // window.setInterval(this.fetchData, 10 * 1000)
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getTable('a').then(response => {
        this.list = response.data.items
      })
      this.listLoading = false
      /* getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      }) */
    },
    handleEdit(id, row) {
      console.log(id, row)
    },
    handleDelete(id, row) {
      console.log(id, row)
    }
  }
}
</script>
