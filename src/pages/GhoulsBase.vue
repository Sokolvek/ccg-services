<template>
    <section>
        <h2>База данных гулей</h2>
        <ul>
            <li>
                <div @click="router.push('/ccg-services/ghouls-base/ghoul')" class="img-wrapper">
                    <img src="../assets/imgs/ghoul.jpg" alt="">
                    <p class="desc">Курона Ясухиса ss+</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter()


</script>

<style scoped>

h2{
    display: flex;
    justify-content: center;
    font-size: 32px;
}

li{
    margin-top: 100px;
    max-width: 500px;
    border-radius: 5px;
    list-style: none;
}

.img-wrapper{
    cursor: pointer;
    width: 300px;
    height: 300px;
    position: relative;
    transition: 0.4s;
    transition: opacity 0.9s ease; 
}

.img-wrapper::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    z-index: 1;
    pointer-events: none;
    opacity: 0; 
    transition: opacity 0.9s ease; 
}

.desc{
    position: absolute;
    bottom: 0;
    left: 5%;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.9s ease;
}

.img-wrapper:hover::before {
    opacity: 1; 
}

.img-wrapper:hover .desc{
    opacity: 1;
}
.img-wrapper > img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

</style>