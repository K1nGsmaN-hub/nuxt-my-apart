<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
    <nuxt-link class="navbar-brand" to="/">Nuxt SSR</nuxt-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link no-prefetch exact active-class="active" class="nav-link" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/users">Users</nuxt-link>
        </li>
        <li class="nav-item" v-if="!hasToken">
          <nuxt-link active-class="active" class="nav-link" to="/login">Login</nuxt-link>
        </li>
        <li class="nav-item" v-if="hasToken">
          <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </nav> -->
  <nav>
    <span class="arrow-back"></span>
    <span class="title">Управление квартирами</span>
  </nav>
</template>

<script>
export default {
  // computed: {
  //   hasToken() {
  //     return this.$store.getters.hasToken
  //   }
  // },
  //
  // methods: {
  //   logout() {
  //     this.$store.dispatch('logout')
  //     this.$router.push('/login')
  //   }
  // }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  nav{
    position: relative;
    box-sizing: border-box;
    background-color: #00527B;
    padding: 12px 0;
    text-align: center;
    width: 100vw;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
  }
  .title {
    color: #FDFDFD;
    font-family: Noto Sans,sans-serif;
    font-size: 16px;
  }
  .arrow-back {
    cursor: pointer;
    position: absolute;
    background-color: transparent;
    left: 15px;
    top: 9px;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    transition: background-color .2s linear;
  }
  .arrow-back:hover {
    background-color: #1c5b7c;
  }
  .arrow-back::before, .arrow-back::after {
    content: '';
    position: absolute;
    left: 8px;
    width: 12px;
    height: 2px;
    background-color: #fff;
    border-radius: 3px;
  }
  .arrow-back::before {
    bottom: 18px;
    transform: rotate(-45deg);
  }
  .arrow-back::after {
    top: 18px;
    transform: rotate(45deg);
  }



</style>
