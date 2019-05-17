<template>
  <div class="wrapper">
    <h1>{{ msg }}</h1>
    <div class="wrapper__form">
      <h2>computed: {{ fullNameComputed }}</h2>
      <h2>methods: {{ fullNameMethod() }}</h2>
      <el-form>
        <el-form-item label="First Name">
          <el-input v-model="firstName" />
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input v-model="lastName" />
        </el-form-item>
        <el-date-picker
          @change="emitToParent($event)"
          v-model="date"
          :picker-options="dateRangeOptions"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="Pick a day"
        ></el-date-picker>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MethodsComputed',
  props: {
    msg: {
      type: String,
      required: false,
      default: '',
    },
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      date: '1999-11-11',
      dateRangeOptions: {
        firstDayOfWeek: 1,
      },
    };
  },
  computed: {
    fullNameComputed () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  methods: {
    fullNameMethod () {
      return `${this.firstName} ${this.lastName}`;
    },
    emitToParent (event) {
      this.$emit('child-to-parent', this.date);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__form {
    width: 500px;
    margin: 50px 0;
    text-align: left;
  }
}
</style>
