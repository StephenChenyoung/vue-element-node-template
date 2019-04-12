<template>
  <div>
    <template>
      <el-upload
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :file-list="fileList"
        class="upload-demo"
        action="http://localhost:9999/hm/file/pic"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">仅限于图片上传</div>
      </el-upload>
      <div style="width: 300px" class="block">
        <h1>我的照片墙</h1>
        <div class="block">
          <el-timeline
            v-for="img in imgUrl.imgs"
            :key="img"
          >
            <el-timeline-item :timestamp="handleGetTime(img)" placement="top">
              <el-card>
                <h4>上传图片</h4>
                <img :src="imgUrl.path+img" alt="" style="width: 100px;height: 100px;">
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </template>
  </div>
</template>

<!--<div>
  <img :src="imgUrl" alt="暂无图片" width="100%">
</div>-->
<!-- action="https://jsonplaceholder.typicode.com/posts/" -->

<script>

export default {
  name: 'UploadPic',
  data() {
    return {
      fileList: [],
      imgUrl: {
        path: '',
        imgs: []
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleSuccess(response, file, fileList) {
      console.log(JSON.stringify(response))
      this.imgUrl.path = response.path
      this.imgUrl.imgs = response.imgs
    },
    handleGetTime(str) {
      const ns = str.substr(0, str.lastIndexOf('.'))
      return ns
    }
  }
}
</script>
