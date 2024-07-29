<template>
    <section>
        <div class="img-wrapper">
            <img src="../assets/imgs/test.svg" alt="">
        </div>
        <div class="buttons-wrapper">
            <!-- <button>База данных гулей</button> -->
            <button @click="router.push('/create-report')">Сделать Отчёт</button>
            <!-- <button></button> -->
        </div>
    </section>
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter()

</script>

<style>

.img-wrapper{
    position: absolute;
    top: -15%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    clip-path: polygon(15px 23%, 92% 175px, 92% 71%, 16px 71%);
}

.buttons-wrapper{
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);
}

.buttons-wrapper > button{
    color: white;
}

img{
    height: 800px;
    clip-path: polygon(15px 23%, 92% 175px, 92% 71%, 16px 71%);
    /* margin-top: 20px; */
    /* transform: translateX(50%); */
    /* animation: test 2s forwards 1.5s; */
}

@keyframes test {    
    100%{
        transform: translateX(0%);
    }
}

</style>