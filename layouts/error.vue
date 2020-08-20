<template>
  <section>
    <h1>Error 404.</h1>
    <h2>Page not found</h2>

    <nuxt-link to="/">На главную</nuxt-link>
  </section>
</template>

<script>
  export default {
    layout: 'empty'
  }
</script>

<style scoped>
  section {
    width: 600px;
    margin: 0 auto;
    padding-top: 5rem;
  }
  h1 {color: #a01111
  }
  h2 {text-transform: uppercase}
</style>
