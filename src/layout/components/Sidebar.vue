<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">
          Navigator Two
        </span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">
          Navigator Three
        </span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">
          Navigator Four
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      isCollapse: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-width: 100%;
  min-height: calc(100vh - 61px);
}
</style>
