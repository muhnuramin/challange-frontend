<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {createCulture} from '@/services/dataBudaya'
import { useCounterStore } from '@/stores/counter'

const xCounter = useCounterStore()
const vFormCulture=ref<any>({
  judul:'',
  kategori:'',
  deskripsi:'',
  gambar:null as File | null,
  emailpenulis:'',
  namapenulis:'',
  nohp:''
})

const SubmitBudaya=async()=>{
  xCounter.isLoadingButton(true)
  const simpan=await createCulture(vFormCulture.value)
  if (simpan) {
    vFormCulture.value = {
      gambar: null,
      judul: '',
      deskripsi: '',
      kategori: '',
      emailpenulis: '',
      namapenulis: '',
      nohp: ''
    };
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
    xCounter.isLoadingButton(false)
    xCounter.isNotif(true)
    await new Promise(resolve => setTimeout(resolve, 1000));
    xCounter.isNotif(false)
  }
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log(target)
  if (target.files && target.files.length > 0) {
    vFormCulture.value.gambar = target.files[0];
  }
};
</script>

<template>
  <!-- Book A Table Section -->
  <section id="book-a-table" class="book-a-table section">

<!-- Section Title -->
<div class="container section-title">
  <p><span>FORM</span> <span class="description-title">SUBMIT BUDAYA<br></span></p>
  <p>Mari kita bersama-sama untuk melestarikan tradis dan budaya asli Gresik</p>
</div><!-- End Section Title -->

<div class="container">
  <div v-if="xCounter.Notif" class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Data Berahasil diajukan</strong> Data akan direview admin dan Akan Dipublis minimal 2x24 jam.
  </div>
  <div class="row g-0">
    
    <div class="col-lg-4 reservation-img" style="background-image: url(assets/img/bajuadat.png);"></div>
    
    <div class="col-lg-8 d-flex align-items-center reservation-form-bg">
      <form @submit.prevent="SubmitBudaya()" role="form" class="php-email-form">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6">
            <input v-model="vFormCulture.namapenulis" type="text" name="name" class="form-control" id="name" placeholder="Nama Penulis" required>
          </div>
          <div class="col-lg-4 col-md-6">
            <input v-model="vFormCulture.emailpenulis" type="email" class="form-control" name="email" id="email" placeholder="Email Penulis (Opsional)" required>
          </div>

          <div class="col-lg-4 col-md-6">
            <input v-model="vFormCulture.nohp" type="text" name="no hp" class="form-control" id="no hp" placeholder="no hp (Opsional)" required>
          </div>
          <div class="col-lg-4 col-md-6">
            <input v-model="vFormCulture.judul" type="text" class="form-control" name="judul" id="judul" placeholder="Judul Budaya" required>
          </div>
          <div class="col-lg-4 col-md-6">
            <select v-model="vFormCulture.kategori" class="custom-select form-control">
            <option selected>Pilih Kategori</option>
            <option value="Adat">Adat</option>
            <option value="Kuliner">Kuliner</option>
            <option value="Festifal & Perayaan">Festifal & Perayaan</option>
            </select>
          </div>
          <div class="col-lg-4 col-md-6">
            <input
              @change="handleFileChange"
              type="file"
              class="form-control"
              required
            />
          </div>
        </div>
        <div class="form-group mt-3">
          <textarea v-model="vFormCulture.deskripsi" class="form-control" name="message" rows="10" placeholder="Message"></textarea>
        </div>

        
        <div class="text-center mt-3">
          <button type="submit" >
            <div v-if="xCounter.LoadingButton" class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
            <span v-else>Submit Budaya</span>
          </button>
        </div>
      </form>
    </div><!-- End Reservation Form -->

  </div>

</div>

</section><!-- /Book A Table Section -->
</template>

<style scoped>
.sent-success {
  display: none;
  color: #ffffff;
  background: #059652;
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}
</style>