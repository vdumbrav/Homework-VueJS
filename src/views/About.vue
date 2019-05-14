<template>
  <div class="about">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 5" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  width: 750px;
  margin: 50px auto;
}

.el-carousel {
  min-width: 100%;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;

    h3 {
      margin: 0;
    }

    &:nth-child(even) {
      background-color: #99a9bf;
    }

    &:nth-child(odd) {
      background-color: #d3dce6;
    }
  }
}
</style>
