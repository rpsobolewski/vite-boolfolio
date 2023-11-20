<!-- App.vue -->
<template>
  <header>

    <Navbar />

  </header>

  <main>

    <router-view></router-view>

  </main>
</template>

<script>
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style></style>
