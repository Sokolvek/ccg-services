<template>
    <section>
        <div class="img-wrapper">
            <img src="../assets/imgs/test.svg" alt="">
        </div>
        <div class="buttons-wrapper">
            <button @click="router.push('/ccg-services/create-report')">Сделать Отчёт</button>
            <button @click="router.push('/ccg-services/ghouls-base')">База данных гулей</button>
            <button @click="router.push('/ccg-services/knowledge-base')">База знаний</button>
        </div>
    </section>
</template>

<script setup>

import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted(() => {
   
})

</script>

<style scoped>

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
    bottom: 30%;
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