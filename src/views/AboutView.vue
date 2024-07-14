<script setup lang="ts">
import Space from '../components/home/space.vue'
import About from '../components/about/index.vue'
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
  <About/>
</template>