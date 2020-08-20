<template>
  <section>
    <form @submit.prevent="onSubmit">
      <h1>{{this.pageTitle}}</h1>
      <div class="form-group">
        <p>Адрес эл. почты</p>
        <input type="email" class="form-control" v-model="email">

        <p>Пароль</p>
        <input type="password" class="form-control" v-model="password">

        <p>Город</p>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="selectedCity">
          <option
            v-for="city of cities"
            :value="city.id">
            {{city.city}}
          </option>
        </select>
      </div>

      <button @click="toHome" type="button" class="btn btn-secondary">На главную</button>
      <button class="btn btn-primary" type="submit">Завершить</button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty',

  async fetch({store}) {
    if (store.getters["cities/cities"].length === 0) {
      await store.dispatch('cities/fetch')
    }
  },

  data: () => ({
    pageTitle: 'Регистрация',
    email: '',
    password: '',
    selectedCity: '',

  }),

  computed: {
    cities() {
      return this.$store.getters["cities/cities"]
    }
  },

  methods: {
    onSubmit() {
      const data= {
        email: this.email,
        password: this.password,
        cityId: this.selectedCity,
      }
      this.$axios.$post('https://5f3a6e3b2300b100169a8b93.mockapi.io/api/v1/users', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))

      this.$store.dispatch('login')
      this.$router.push('/confirm')
    },

    toHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  form {
    width: 500px;
    margin: 0 auto;
  }
</style>
