<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="文本框">
        <el-input v-model="form.name" @change="onChange"/>
      </el-form-item>
      <el-form-item label="下拉框">
        <el-select v-model="form.region" placeholder="please select your zone" @change="onChange">
          <el-option label="Zone one" value="shanghai"/>
          <el-option label="Zone two" value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item label="时间选择">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" @change="onChange"/>
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" @change="onChange"/>
        </el-col>
      </el-form-item>
      <el-form-item label="状态框">
        <el-switch v-model="form.delivery"/>
      </el-form-item>
      <el-form-item label="多选框">
        <el-checkbox-group v-model="form.type" @change="onChange">
          <el-checkbox label="Online activities" name="type"/>
          <el-checkbox label="Promotion activities" name="type"/>
          <el-checkbox label="Offline activities" name="type"/>
          <el-checkbox label="Simple brand exposure" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="单选框" >
        <el-radio-group v-model="form.resource" @change="onChange">
          <el-radio label="Sponsor"/>
          <el-radio label="Venue"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="多文字区域" >
        <el-input v-model="form.desc" type="textarea" @change="onChange"/>
      </el-form-item>
      <el-form-item label="评分">
        <el-rate v-model="form.rate" @change="onChange"/>
      </el-form-item>
      <el-form-item label="滑块">
        <el-slider v-model="form.slider"/>
      </el-form-item>
      <el-form-item label="资料完善度">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="percent" color="rgba(142, 113, 199, 0.7)"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { submitForm } from '@/api/formdata'
export default {
  data() {
    return {
      percent: 0,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        rate: null,
        slider: null
      }
    }
  },
  methods: {
    onChange() {
      // this.percent = 80
      let n = 0
      if (this.form.name !== '') {
        n = n + 1
      }
      if (this.form.region !== '') {
        n = n + 1
      }
      if (this.form.date1 !== '' && this.form.date1 !== null) {
        n = n + 1
      }
      if (this.form.date2 !== '' && this.form.date2 !== null) {
        n = n + 1
      }
      if (this.form.type.length !== 0) {
        n = n + 1
      }
      if (this.form.resource !== '') {
        n = n + 1
      }
      if (this.form.desc !== '') {
        n = n + 1
      }
      if (this.form.rate !== null && this.form.rate > 0) {
        n = n + 1
      }
      // console.log(JSON.stringify(this.form))
      this.percent = n / 8 * 100
    },
    onSubmit() {
      console.log(this.form.slider)
      submitForm(this.form).then(response => {
        this.$message({
          message: response.msg,
          type: 'success'
        })
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

