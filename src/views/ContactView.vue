<script setup lang="ts">
import Contact from '../components/contact/index.vue'
import { useCounterStore } from '../stores/counter.ts'
import { ref, onMounted } from 'vue'

const xCounter = useCounterStore()

onMounted(()=>{
  xCounter.isLoading(true)
  xCounter.isLoading(false)
})
</script>

<template>
  <div v-if="xCounter.Loading" id="preloader"></div>
  <Contact/>
</template>