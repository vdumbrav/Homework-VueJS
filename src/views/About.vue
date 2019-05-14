<template>
  <div class="about">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  width: 75%;
}

.el-carousel__item {
  min-width: 100%;

  h3 {
    margin: 0;
    font-size: 18px;
    line-height: 300px;
    color: #475669;
    opacity: 0.75;
  }

  &:nth-child(2n) {
    background-color: #99a9bf;
  }

  &:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
