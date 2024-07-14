<script setup lang="ts">
import Katalog from '../components/katalog/index.vue'
import { useCounterStore } from '../stores/counter.ts'
import { ref, onMounted } from 'vue'
import { useCultureStore } from '@/stores/cultures.ts'
import {getCulture} from '@/services/dataBudaya'

const xCounter = useCounterStore()
const xCulture = useCultureStore()

onMounted(async()=>{
  xCounter.isLoading(true)
  const data = await getCulture()
  xCulture.setBudaya(data.data)
  xCounter.isLoading(false)
})
</script>

<template>
  <div v-if="xCounter.Loading" id="preloader"></div>
  <Katalog/>
</template>