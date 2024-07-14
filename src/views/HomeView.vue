<script setup lang="ts">
import HeroWEB from '../components/home/hero.vue'
import About from '../components/home/about.vue'
import KatalogBudaya from '../components/home/katalog.vue'
import Space from '../components/home/space.vue'
import { useCounterStore } from '../stores/counter.ts'
import { useCultureStore } from '@/stores/cultures.ts'
import { ref, onMounted } from 'vue'
import {getCulture} from '@/services/dataBudaya'

const xCounter = useCounterStore()
const xCulture = useCultureStore()

onMounted(async()=>{
  // xCounter.isLoading(true)
  const data = await getCulture()
  xCounter.isLoading(false)
  console.log(data)
  xCulture.setBudaya(data.data,'Home')
})

</script>

<template>
  <div v-if="xCounter.Loading" id="preloader"></div>
  <HeroWEB/>
  <About/>
  <Space/>
  <KatalogBudaya/>
</template>
