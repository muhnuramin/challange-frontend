<script setup lang="ts">
import { ref, onMounted } from 'vue';
const activeLink = ref<string>(window.location.pathname);

// Update activeLink saat navigasi berubah
onMounted(() => {
  window.addEventListener('popstate', () => {
    activeLink.value = window.location.pathname;
  });
});
</script>

<template>
    <!-- Stats Section -->
    <section id="stats" class="stats section dark-background">

    <img src="/public/assets/img/stats-bg.jpg" alt="" >

    <div class="container position-relative">

        <div class="titleText text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
            <p v-if="activeLink === '/about'">About</p>
            <p v-else-if="activeLink === '/katalog'">Katalog Budaya</p>
            <p v-else-if="activeLink === '/contact'">Contact</p>
        </div>

    </div>

</section>
<!-- /Stats Section -->
</template>
<style scoped>
.titleText{
    padding: 0;
    margin: 0;
    font-size: 50px;
    font-weight: 700;
    color: white;
}
</style>