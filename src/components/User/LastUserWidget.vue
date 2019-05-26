<template>
  <div>
    <el-input
      :disabled="loadingUsers"
      placeholder="Search"
      icon="search"
      v-model="search"
      @change="event => filter(event.target.value)"
    ></el-input>
    <ul class="list" v-loading="loadingUsers">
      <li v-for="user in userList" :key="user.id" class="list__item">
        <img class="list__item-img" :src="user.profile_image" :alt="user.display_name" />
        <span>{{ user.display_name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data () {
    return {
      search: '',
    };
  },
  computed: {
    ...mapGetters({
      userList: 'user/getList',
      loadingUsers: 'user/getLoading',
    }),
  },
  watch: {
    filter: function (value) {
      this.fetchUsers({ _limit: 10, _q: value });
    },
  },
  created () {
    this.fetchUsers({ _limit: 10, _q: this.search });
  },

  methods: {
    ...mapActions({
      fetchUsers: 'user/fetch',
    }),
  },
};
</script>
<style lang="scss" scoped>
.list {
  box-sizing: border-box;
  min-width: 100%;
  min-height: 450px;
  padding: 15px;
  margin: 0;
  list-style-type: none;
  border: 1px solid #ccc;

  &__item {
    padding: 5px;

    &-img {
      width: 30px;
      height: 30px;
      margin-right: 15px;
      object-fit: cover;
    }
  }
}
</style>
