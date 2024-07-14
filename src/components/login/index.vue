<script setup lang="ts">
import {  ref } from 'vue';
import {getCulture, Login} from '@/services/dataBudaya'
import { useCounterStore } from '@/stores/counter'

const xCounter = useCounterStore()
const dataUser=ref({
  username: '',
  password: '',
})

const onLogin=async()=>{
  xCounter.isLoadingButton(true)
  const data=await Login(dataUser.value)
  xCounter.isLoadingButton(false)
  if (data.success) {
    xCounter.login()
  }
  // xCounter.isLoadingButton(false)
}

</script>

<template>
    <section id="contact" class="contact section">
        <div class="container">
            <form @submit.prevent="onLogin" class="php-email-form">
                  <div class="row gy-4">
                    <div class="container section-title login-title" >
                        <h1>Login Admin</h1>
                        <p> <span class="description-title">Gresik Culture</span></p>
                    </div>
                    <div class="col-md-12">
                      <input v-model="dataUser.username" type="text" name="username" class="form-control" placeholder="username" required>
                    </div>

                    <div class="col-md-12 ">
                      <input v-model="dataUser.password" type="password" class="form-control" name="username" placeholder="password" required>
                    </div>
        
                    <div class="col-md-12 text-center">
                      <button type="submit">
                        <div v-if="xCounter.LoadingButton" class="spinner-border" role="status">
                          <span class="sr-only"></span>
                        </div>
                        <span v-else>Login Admin</span>
                        </button>
                    </div>
        
                  </div>
            </form>
        </div>
    </section>
</template>
<style scoped>
.suggest-container{
    margin-bottom: 375px;
}
.login-title{
    padding-bottom: 0 !important;
}
.php-email-form{
    margin-bottom: 200px;
}
</style>