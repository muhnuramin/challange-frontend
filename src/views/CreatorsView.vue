<script setup lang="ts">
import Login from '../components/login/index.vue'
import ListPengajuan from '../components/login/approve.vue'
import { ref, onMounted } from 'vue'
import { useCounterStore } from '../stores/counter.ts'

const xCounter = useCounterStore()

onMounted(()=>{
  xCounter.isLoading(true)
  xCounter.isLoading(false)
})
</script>

<template>
  <div v-if="xCounter.Loading" id="preloader"></div>
  <Login v-if="!xCounter.isLogin"/>
  <ListPengajuan v-else/>
</template>