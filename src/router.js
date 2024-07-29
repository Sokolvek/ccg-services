import {createRouter, createWebHistory} from "vue-router"

import CreateReport from "./components/CreateReport.vue"
import MainPage from "./pages/MainPage.vue"

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            component:MainPage
        },

        {
            path:"/create-report",
            component:CreateReport
        }
    ]
})