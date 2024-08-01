import {createRouter, createWebHistory} from "vue-router"

import CreateReport from "./pages/CreateReport.vue"
import MainPage from "./pages/MainPage.vue"
import GhoulsBase from "./pages/GhoulsBase.vue"
import GhoulPage from "./pages/GhoulPage.vue"
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
        },
        {
            path:`${baseUrl}/ghouls-base`,
            component:GhoulsBase
        },
        {
            path:`${baseUrl}/ghouls-base/ghoul`,
            component:GhoulPage
        }
    ]
})