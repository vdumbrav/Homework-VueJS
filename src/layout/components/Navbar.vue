<template>
  <el-menu class="el-menu" mode="horizontal">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="3"></el-col>
      <el-col :span="3">
        <el-menu-item index="1">
          <img class="logo" src="https://i.stack.imgur.com/440u9.png" alt="logo" />
        </el-menu-item>
      </el-col>
      <el-col :span="12" class="search">
        <el-input placeholder="Search" icon="search" v-model="search"></el-input>
      </el-col>
      <el-col :span="3"></el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <!-- <el-menu-item index="1">
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
    </el-menu-item>-->
  </el-menu>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      search: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  min-width: 100%;

  .el-menu-item {
    height: 56px;
    padding: 0 20px;
    line-height: 56px;
  }
}

.logo {
  width: auto;
  max-height: 33px;
}

.search {
  display: flex;
  align-items: center;
}
</style>
