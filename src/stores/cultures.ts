import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCultureStore = defineStore('culture', () => {
    const dataBudaya = ref<any[]>([]); 
    const dataBudayaHome = ref<any[]>([]); 
    const dataKategori = ref<any[]>([]);

    function setBudaya(data: any[],Menu?:string) {
        if (Menu) {
            dataBudayaHome.value=data.filter(item=>item.statusPublish==1)
            .slice(0,3)
        }else{
            dataBudaya.value=[]
            dataBudaya.value = data
            setKategori(data)
        }
    }
    
    function setKategori(data: any[]) {
            data.forEach((item: any) => {
                // Memeriksa apakah item.kategori sudah ada dalam dataKategori.value
                if (!dataKategori.value.includes(item.kategori)) {
                    dataKategori.value.push(item.kategori);
                }
            });
    }
    return {
        dataBudaya,dataKategori,dataBudayaHome,
        setBudaya,setKategori
    };
});
