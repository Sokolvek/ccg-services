<template>
    <section>
        <div class="img-wrapper">
            <img src="../assets/imgs/test.svg" alt="">
        </div>
        <div class="buttons-wrapper">
            <!-- <button>База данных гулей</button> -->
            <button @click="router.push('/ccg-services/create-report')">Сделать Отчёт</button>
            <!-- <button></button> -->
        </div>
    </section>
</template>

<script setup>

import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted(() => {
    const request = new XMLHttpRequest();
    request.open("POST","https://ptb.discord.com/api/webhooks/1267978280796033106/XJKgtTCi8oKYIMrhRYNHCBBevOv7S7IUziYrHnF1wRUBBAE5_wL9-VFK4DRTHi8PUBbs")
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
    username: "My Webhook Name",
    avatar_url: "",
    content: "The message to send"
    }
    request.send(JSON.stringify(params));
})

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