<template>
    <section>

        <div class="form-row">
            <label for="">Номер отчёта</label>
            <input type="text" v-model="reportNum" />
        </div>

        <div class="form-row">
            <label for="">Участники</label>
            <div class="search">
                <input type="text" @input="searchSuggest" v-model="suggestValue">
                <p v-for="(suggest, i) in suggested" :key="i" @click="addMember(suggest)" class="suggest">{{ suggest.firstName + " " + suggest.lastName }}</p>
            </div>
            <div class="members" v-if="members.length">
                <ul>
                    <li v-for="(member, i) in members" :key="i">
                        <p>{{ member.firstName + " " + member.lastName }}</p>
                        <button @click.prevent="deleteMember(i)">-</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="form-row">
            <label for="">Цель</label>
            <select name="" id="" v-model="selected">
                <option v-for="(option, i) in options" :key="i" :value="option">{{ option }}</option>
            </select>
        </div>
        <button @click="makeReport">Сделать отчёт</button><br/>
        <div class="result-wrapper" v-if="result.length">
            <span class="result" v-for="res in result">{{ res }}<br/></span>
            <button @click="copyReport">Скопировать Отчёт</button>
        </div>
    </section>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import eventsData from "../../static/storage.json"

const suggested = ref([])
const suggestValue = ref("")
const reportNum = 0
const members = ref([])
const options = ref(["Патруль", "Захват точек", "Допрос гуля", "Захват конвоя", "Обучение студента"])
const selected = ref(options[0])
const result = ref([])

const ccgs = [
  { firstName: "Arumanfi", lastName: "Miura" },
  { firstName: "Anko", lastName: "Koshi" },
  { firstName: "Сасаке", lastName: "Хайсе" },
  { firstName: "Клэр", lastName: "Нишияма" },
  { firstName: "Джузо", lastName: "Сузуя" },
  { firstName: "Куки", lastName: "Урие" },
  { firstName: "Yuutsure", lastName: "Kasune" },
  { firstName: "Рейнхард", lastName: "Рудель" },
  { firstName: "Сайко", lastName: "Йонебояши" },
  { firstName: "Hiroto", lastName: "Takahashi" },
  { firstName: "Kiyotaka", lastName: "Ayanokoji" },
  { firstName: "Kurosaki", lastName: "Tatchitochibara" },
  { firstName: "Maybe", lastName: "Eren" },
  { firstName: "Morsik", lastName: "Mori" },
  { firstName: "Renzo", lastName: "Toriami" },
  { firstName: "Senesha", lastName: "Tanaka" },
  { firstName: "Shigimo", lastName: "Kasiri" },
  { firstName: "Yukio", lastName: "Hashikawa" },
  { firstName: "Сато", lastName: "Хинин" },
  { firstName: "Ayato", lastName: "Kirigiri" },
  { firstName: "Aki", lastName: "Sao" },
  { firstName: "Cota", lastName: "Cimada" },
  { firstName: "Elric", lastName: "Kurai" },
  { firstName: "Hughie", lastName: "Zerkinot" },
  { firstName: "Iber", lastName: "Bure" },
  { firstName: "Kaylo", lastName: "Fugashima" },
  { firstName: "Kugashira", lastName: "Thachibana" },
  { firstName: "Lashandr", lastName: "Chieffo" },
  { firstName: "Manato", lastName: "Onishi" },
  { firstName: "Nipa", lastName: "Reqooqi" },
  { firstName: "Tadao", lastName: "Imada" },
  { firstName: "Tanao", lastName: "Akuki" }
]

function searchSuggest() {
  suggested.value = []
  if (suggestValue.value == "") return

  ccgs.forEach(person => {
    if (
      person.firstName.toLocaleLowerCase().startsWith(suggestValue.value.toLocaleLowerCase()) ||
      person.lastName.toLocaleLowerCase().startsWith(suggestValue.value.toLocaleLowerCase())
    ) {
      suggested.value.push(person)
    }
  })
}
function copyReport(){
    navigator.clipboard.writeText(result.value)
}

function addMember(member){
    if(members.value.includes(member)) return

    members.value.push(member)

}

function deleteMember(id) {
    members.value.splice(id, 1)
}

function normilizeMembers(){
    const res = []
    members.value.forEach((item) => {
        res.push(item.firstName + " " + item.lastName)
    })

    return res
}

function makeReport(){
    result.value = []

    let normalMembers = normilizeMembers()
    console.log(members.value)
    const reportDetails = eventsData[selected.value];
    members.value = []
    suggested.value = []
    suggestValue.value = ""

    const reportLines = [
        `1. Номер отчёта: No${reportNum} \n`,
        `2. Участники: ${normalMembers.join(", ")} \n`,
        `3. Цель: ${selected.value} \n`,
        `4. Краткое описание: ${reportDetails.desc} \n`,
        `5. Результат: ${reportDetails.res[0]}`
    ];

    result.value.push(...reportLines);

}

onMounted(() => {
    console.log(eventsData["Допрос гуля"])
})
</script>

<style scoped>
.form-row {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    gap: 10px;
}


li{
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
}

.result{
    text-align: left;
}

li > button{
    height: 40px;
}

.result-wrapper > button{
    margin-top: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

section{
    margin: 0 auto;
    margin-top: 200px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    width: 100%;
}

.suggest{
    /* background-color: #1a1a1a; */
    cursor: pointer;
}

input{
    background-color: #1a1a1a;
    color: #ffffff;
    border: 1px solid #333333;
    border-radius: 5px;
    padding: 5px 5px;
    /* width: 300px; */
    font-size: 16px;
    transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus{
    border-color: #4a90e2;
    box-shadow: 0 0 5px rgba(74, 144, 228, 0.5);
    outline: none;
}

select{
    background-color: #1a1a1a;
    color: #ffffff;
    border: 1px solid #333333;
    border-radius: 5px;
    padding: 5px 5px;
    width: 200px;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    transition: border-color 0.3s, box-shadow 0.3s;
}

select:focus{
    border-color: #4a90e2;
    box-shadow: 0 0 5px rgba(74, 144, 228, 0.5);
    outline: none;
}

option{
    background-color: #1a1a1a;
    color: #ffffff;
}


</style>