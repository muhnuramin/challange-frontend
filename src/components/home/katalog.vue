<script setup lang="ts">
import { useCultureStore } from '@/stores/cultures.ts'
import {  ref } from 'vue';

const xCulture = useCultureStore()

const show=ref(false)
const dataBudaya=ref({
    judul: '',
    gambar: '',
    kategori:'',
    deskripsi: '',
})
const openModal=(item:any)=>{
    show.value = true
    dataBudaya.value = {...item}
}

const closeModal=()=>{
    show.value = false
}
const singkat = (text: string, batas: number) => {
  if (text.length > batas) {
    return text.substring(0, batas) + '...'
  } else {
    return text
  }
}

</script>
<template>
    <!-- Chefs Section -->
    <section id="chefs" class="chefs section">

<!-- Section Title -->
<div class="container section-title">
  <h2>Katalog</h2>
  <p><span>Katalog Budaya</span> <span class="description-title">Gresik<br></span></p>
</div><!-- End Section Title -->

<div class="container">

  <div class="row gy-4">
    <div v-for="(item,index) in xCulture.dataBudayaHome" class="col-lg-4 d-flex align-items-stretch">
      <div class="team-member">
        <div class="member-img">
          <img :src="item.gambar" class="img-fluid" alt="">
        </div>
        <div class="member-info">
          <h4>{{item.judul}}</h4>
          <span>{{item.kategori}}</span>
          <p>{{ singkat(item.deskripsi,100) }}</p>
          <a class="btn-more"  @click="openModal(item)">Baca Lebih Lanjut</a>
        </div>
      </div>
    </div>

  </div>

</div>

</section><!-- /Chefs Section -->
<div v-if="show" class="modal-overlay">
        <div class="modal-content">
            <header class="modal-header">
                <h2>{{dataBudaya.judul}}</h2>
                <button  @click="closeModal" class="close-btn">&times;</button>
            </header>
            <main class="modal-body">
                <div class="modal-img">
                    <img :src="dataBudaya.gambar" class="img-modal" alt="" />
                </div>
                <p><b>Kategori : </b>{{dataBudaya.kategori}}</p>
                <p><b>Deskripsi</b> :{{ dataBudaya.deskripsi }}</p>
            </main>
        </div>
    </div>
</template>

<style scoped>
.btn-more,
.btn-more:focus {
  color: var(--contrast-color);
  background: var(--accent-color);
  font-size: 14px;
  padding: 8px 26px;
  /* margin: 0; */
  border-radius: 50px;
  transition: 0.3s;
  margin-bottom: 50px;
}

.btn-more:hover,
.btn-more:focus:hover {
  color: var(--contrast-color);
  background: color-mix(in srgb, var(--accent-color), transparent 15%);
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index:1;
}

.modal-content {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  width: 800px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 70%;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.modal-header h2 {
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  margin-bottom: 1.5rem;
}

.modal-img {
  text-align: center;
  margin-bottom: 1rem;
}

.img-modal {
  max-width: 50%;
  height: auto;
  border-radius: 10px;
}

p {
  margin: 0.5rem 0;
}
</style>