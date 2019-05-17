<template>
  <div class="home">
    <h2>date: {{ date }}</h2>
    <img alt="Vue logo" src="../assets/logo.png" />
    <MethodsComputed msg="Welcome to Your Vue.js App" @child-to-parent="onChildDate" />
  </div>
</template>

<script>
// @ is an alias to /src
import MethodsComputed from '@/components/MethodsComputed.vue';

export default {
  name: 'Home',
  components: {
    MethodsComputed,
  },
  data () {
    return {
      date: '',
    };
  },
  methods: {
    onChildDate (value) {
      this.date = value;
    },
  },
};
</script>
