import { createWebHistory, createRouter } from "vue-router"

import Dashboard from "@/components/Lection_15/Dashboard.vue"
import AboutContent from "@/components/Lection_15/AboutContent.vue"
import CataloguePage from "@/components/Seminar_15/CataloguePage.vue"
import NotFound from "@/components/Lection_15/NotFound.vue"
import BlogPage from "@/components/pages/BlogPage.vue"
import BlogDetails from "@/components/pages/BlogDetails.vue"


const routes = [
/*    {path: '/', name: 'Dashboard', component: Dashboard},
    {path: '/about/:param?', name: 'AboutContent', component: AboutContent }, // Захватываем все маршруты "/about/*" - параметризированный маршрут с необязательным параметром (/about/:param?)
    {path: '/catalogue/:page(\\d+)?', name: 'Catalogue', component: CataloguePage},*/
    {path: '/404', name: 'NotFound', component: NotFound}, 
    {path: '/:pathMatch(.*)', redirect: '/404' }, //Все неизвестные маршруты отправляются на 404
    // ПРОЕКТ!!!
    {path: '/blog', name: 'BlogPage', component: BlogPage},
    {path: '/blog/:id', name: 'BlogDetails', component: BlogDetails,  props: true} // Включаем props, чтобы передавать параметры из маршрута}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router



