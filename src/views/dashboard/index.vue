<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ name }}，您好！</div>
    <div class="dashboard-text">您的角色是:<span v-for="role in roles" :key="role">{{ role }}</span></div>
    <el-progress :percentage="30" type="circle" color="blue"/>
    <el-progress :percentage="50" type="circle" color="red"/>
    <el-progress :percentage="20" type="circle" color="green"/>
    <el-progress :percentage="60" type="circle" color="black"/>
    <el-progress :percentage="70" type="circle" color="orange"/>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in ['运气','智慧','速度','耐力','韧性']" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.el-carousel-item {
  text-align: center;
}
.el-carousel__item h3 {
  // color: #475669;
  //font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  color: white;
  font-size: 30px;
}

.el-carousel__item:nth-child(3) {
  background-color: blue;
}
.el-carousel__item:nth-child(4) {
  background-color: red;
}
.el-carousel__item:nth-child(5) {
  background-color: green;
}
.el-carousel__item:nth-child(6) {
  background-color: black;
}
.el-carousel__item:nth-child(7) {
  background-color: orange;
}
</style>
