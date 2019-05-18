<template>
  <div>
    <Navbar />
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="3"></el-col>
      <el-col :span="3">
        <Sidebar />
      </el-col>
      <el-col :span="12"></el-col>
      <el-col :span="3"></el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
import Navbar from '@/layout/components/Navbar.vue';
import Sidebar from '@/layout/components/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
