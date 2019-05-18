<template>
  <el-menu class="el-menu" mode="horizontal">
    <el-menu-item index="1">
      Processing Center
    </el-menu-item>
    <el-submenu index="2">
      <el-menu-item index="2-1">
        item one
      </el-menu-item>
      <el-menu-item index="2-2">
        item two
      </el-menu-item>
      <el-menu-item index="2-3">
        item three
      </el-menu-item>
      <el-submenu index="2-4">
        <el-menu-item index="2-4-1">
          item one
        </el-menu-item>
        <el-menu-item index="2-4-2">
          item two
        </el-menu-item>
        <el-menu-item index="2-4-3">
          item three
        </el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>
      Info
    </el-menu-item>
    <el-menu-item index="4">
      <a href="https://www.ele.me" target="_blank">Orders</a>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
.el-menu {
  min-width: 100%;
}
</style>
