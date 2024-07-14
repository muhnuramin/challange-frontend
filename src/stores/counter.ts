import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const Loading = ref(false)
  const LoadingButton = ref(false)
  const Notif = ref(false)
  const doubleCount = computed(() => count.value * 2)
  const isLogin=ref(false)

  function increment() {
    count.value++
  }
  function isLoading(action:boolean){
    Loading.value = action
  }
  function isLoadingButton(action:boolean){
    LoadingButton.value = action
  }
  function isNotif(action:boolean){
    Notif.value = action
  }
  function login(){
    isLogin.value = true
  }

  return {login,isLogin, count, doubleCount,Notif,LoadingButton,isLoading,isLoadingButton, increment,isNotif,Loading }
})
