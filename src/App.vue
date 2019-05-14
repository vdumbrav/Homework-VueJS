<template>
  <div id="app" class="app">
    <div class="nav">
      <router-link class="nav__link" exact-active-class="nav__link--active" to="/">Home</router-link>
      |
      <router-link class="nav__link" exact-active-class="nav__link--active" to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav {
  padding: 30px;

  &__link {
    font-weight: 700;
    color: #2c3e50;

    &--active {
      color: #42b983;
    }
  }
}
</style>
