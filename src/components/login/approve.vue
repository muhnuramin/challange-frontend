<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCultureStore } from '@/stores/cultures'
import {getCulture,publishCulture,takedownCulture} from '@/services/dataBudaya'
import moment from 'moment';


const xCulture = useCultureStore()
onMounted(async()=>{
    getBudaya()
})

const onApprove=async(id:number)=>{
    const data=await publishCulture(id)
    getBudaya()
}

const onTakeDown=async(id:number)=>{
    const data=await takedownCulture(id)
    getBudaya()
}

const getBudaya=async()=>{
    const data = await getCulture()
    xCulture.setBudaya(data.data)
}
</script>
<template>
    <section id="contact" class="contact section">
        <div class="container">
            <div class="php-email-form">
                <div class="row gy-4">
                    <div  class="col">
                        <h1>Diajukan</h1>
                        <div v-for="(item,index) in xCulture.dataBudaya" class="list-group mb-2">
                            <a v-if="item.statusPublish==0" href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{item.judul}} ({{ item.kategori }})</h5>
                                <small>{{moment(item.created_at).format('DD-MM-YYYY')}} / {{ item.namapenulis }}</small>
                                </div>
                                <p class="mb-1">{{item.deskripsi}}</p>
                                <small>
                                    <button type="button" @click="onApprove(item.cultures_id)" class="btn btn-success btn-sm"><i class="bi bi-arrow-up-circle-fill"></i> Publish</button>
                                    <button type="button" @click="onTakeDown(item.cultures_id)" class="btn btn-warning btn-sm mx-1"><i class="bi bi-arrow-down"></i> Take Down</button>
                                </small>
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <h1>Publish</h1>
                        <div v-for="(item,index) in xCulture.dataBudaya" class="list-group mb-2">
                            <a v-if="item.statusPublish==1" href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{item.judul}} ({{ item.kategori }})</h5>
                                <small>{{moment(item.created_at).format('DD-MM-YYYY')}}</small>
                                </div>
                                <p class="mb-1">{{item.deskripsi}}</p>
                                <small>
                                    <button @click="onTakeDown(item.cultures_id)" type="button" class="btn btn-warning btn-sm mx-1"><i class="bi bi-arrow-down"></i> Take Down</button>
                                </small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>