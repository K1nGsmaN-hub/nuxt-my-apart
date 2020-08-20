<template>
  <section class="container">
    <h1>
      <span>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
        </svg>
      </span>
      Регистрация прошла успешно!
    </h1>
    <button @click="toHome" type="button" class="btn btn-success mt-5">На главную</button>
  </section>
</template>


<script>
  export default {
    layout: 'empty',

    methods: {
      toHome() {
        this.$router.push('/')
        this.$store.dispatch(null)
      }
    },

    middleware: ['auth']
  }
</script>


<style scoped>
section {
  text-align: center;
}
h1 {color: #55efc4}
span {color: #00b894}
</style>
