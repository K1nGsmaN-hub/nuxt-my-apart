<template>
  <div class="content">
    <Navbar />

    <main>
      <div class="main-content">
        <Nuxt />
      </div>
    </main>

    <FooterMenu />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  comments: {
    Navbar
  }
}
</script>

<style>
  body {
    height: 100vh;
    background-color: #F4F9FC;
  }
  main {
    padding: 0 20px 20px;
    height: calc(100vh - 96px);
  }
  .main-content {
    height: 100%;
  }
</style>
