<script setup lang="ts">
import { ref, onMounted } from 'vue'
import moment from 'moment';

const tahun = ref(moment(new Date()).format("YYYY"))
</script>
<template>
    <footer id="footer" class="footer dark-background">
        <div class="container copyright text-center mt-4">
        <p>{{tahun}} © <span>Copyright</span> <span>All Rights Reserved</span></p>
        <div class="credits">
            Designed by <a class="email" href="https://github.com/muhnuramin">muhnuramin956@gmail.com</a>
        </div>
        </div>
    </footer>
</template>
<style scoped>
.email{
    font-weight: bold;
    color: rgb(214, 14, 14);
}
</style>