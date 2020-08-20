<template>
  <div>
    <span>Список помещений пуст</span>
    <button @click="onRoute" type="button" class="btn  btn-lg btn-block">Попробовать бесплатно</button>
  </div>
</template>

<script>

export default {
  methods: {
    onRoute() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

div {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  padding-top: 15px;
  text-align: center;
}
span, button {
  font-family: Noto Sans,sans-serif;
  font-size: 14px;
  color: #00527B;
}
button {
  border: none;
  box-sizing: border-box;
  padding: 12px 0;
  font-size: 16px;
  background-color: #DEE8EE;
}
button:hover {
  background-color: #c9d9e2;
}
</style>
