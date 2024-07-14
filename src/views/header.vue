<script setup lang="ts">
import { ref, onMounted } from 'vue';
const activeLink = ref<string>(window.location.pathname);

// Update activeLink saat navigasi berubah
onMounted(() => {
  window.addEventListener('popstate', () => {
    activeLink.value = window.location.pathname;
  });
});
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
const setMenuMobile=()=>{
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
}
</script>
<template>
    <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container position-relative d-flex align-items-center justify-content-between">

      <a href="/" class="logo d-flex align-items-center me-auto me-xl-0">
        <h1 class="sitename">Gresik Culture</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="/" :class="{ 'active': activeLink === '/' }">Home<br></a></li>
          <li><a href="/about" :class="{ 'active': activeLink === '/about' }">About</a></li>
          <li><a href="/katalog" :class="{ 'active': activeLink === '/katalog' }">Katalog Budaya</a></li>
          <li><a href="/contact" :class="{ 'active': activeLink === '/contact' }">Contact</a></li>
          <!-- <li><a href="/creators" :class="{ 'active': activeLink === '/creators' }">Creators</a></li> -->
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list" @click="setMenuMobile"></i>
      </nav>

      <a class="btn-getstarted" href="/add-culture">Submit Budaya</a>

    </div>
    </header>
    
</template>