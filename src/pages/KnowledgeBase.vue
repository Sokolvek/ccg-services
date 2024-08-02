<template>
    <section>
        <div class="wrap">
            <ul>
                <li v-for="(item, index) in info" :key="index">
                    <a :href="'#' + item.title_id">{{ item.title }}</a>
                </li>
            </ul>
        </div>
        <div v-for="(item,i) in info" :key="i" :id="item.title_id">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
        </div>
        <!-- <h3 v-for="(item, index) in sections" :key="index" :id="item.id">{{ item.title }}</h3>
        <p v-for="(item, index) in sections" :key="index">{{ item.content }}</p> -->
    </section>
</template>

<script setup>

import { onMounted, ref } from 'vue';
const apiUrl = import.meta.env.VITE_BASE

const info  = ref([])
async function getInfo(){
    await fetch(`${apiUrl}/knowledge`)
    .then((resp) => resp.json())
    .then((data) => info.value = data)
}

onMounted(() => {
    getInfo()
})

</script>

<style scoped>
section {
    margin: 0 auto;
    margin-top: 100px;
    max-width: 1000px;
}

ul{
    
}

.wrap{
    display: inline;
    list-style: decimal;
    padding: 15px;
    /* background: #1E1E1E; */
    border-radius: 5px;
}

a{
    color: white;
    text-decoration: underline;
}
</style>