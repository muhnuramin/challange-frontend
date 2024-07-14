<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/header.vue'
import Footer from './views/footer.vue'
</script>

<template>
  <Header/>
  <RouterView />
  <Footer/>
</template>

