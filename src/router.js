import {createRouter, createWebHistory} from "vue-router"

import CreateReport from "./components/CreateReport.vue"
import MainPage from "./pages/MainPage.vue"
const baseUrl = "/ccg-services"

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:`${baseUrl}/`,
            component:MainPage
        },

        {
            path:`${baseUrl}/create-report`,
            component:CreateReport
        }
    ]
})