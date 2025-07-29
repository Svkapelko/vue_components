import { createRouter, createWebHistory } from "vue-router"

import Dashboard from "@/components/Lection_15/Dashboard.vue"
import AboutContent from "@/components/Lection_15/AboutContent.vue"
import CataloguePage from "@/components/Seminar_15/CataloguePage.vue"

import HomePage from "@/components/pages/HomePage.vue"
import BlogPage from "@/components/pages/BlogPage.vue"
import BlogDetails from "@/components/pages/BlogDetails.vue"
import Project from "@/components/pages/Project.vue"
import NotFound from "@/components/Lection_15/NotFound.vue"
import ProjectDetails from "@/components/pages/ProjectDetails.vue"
import { useArticleStore } from "@/stores/project-details"



const routes = [
/*   {path: '/', name: 'Dashboard', component: Dashboard},
    {path: '/about/:param?', name: 'AboutContent', component: AboutContent }, // Захватываем все маршруты "/about/*" - параметризированный маршрут с необязательным параметром (/about/:param?)
    {path: '/catalogue/:page(\\d+)?', name: 'Catalogue', component: CataloguePage},*/
    // ПРОЕКТ!!!
    {path: '/', name: 'Homepage', component: HomePage},
    {path: "/blog", name: 'BlogPage', component: BlogPage},
    {path: "/blog/:id", name: 'BlogDetails', component: BlogDetails, props: true}, 
    // Включаем props, чтобы передавать параметры из маршрута}
    {path: "/project", name: 'Project', component: Project},
    {path: "/project/:id", name: 'ProjectDetails' , component: ProjectDetails,  beforeEnter: (to, from, next) => {
      const articleStore = useArticleStore(); // Подключаем store
      const articleId = Number(to.params.id); // Получаем ID из URL
      const articleExists = articleStore.articles.some(article => article.id === articleId); // Проверяем наличие статьи
  
      if (articleExists) {
        next(); // Переход к статье
      } else {
        next({ name: 'NotFound' }); // Переход на 404
      }
    }
    },
    {path: "/404", name: 'NotFound', component: NotFound}, 
    {path: "/:pathMatch(.*)", redirect: '/404' }, //Все неизвестные маршруты отправляются на 404
];


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
    // Если есть сохранённая позиция (например, при нажатии кнопки "Назад")
    // if (savedPosition) {
    //   return savedPosition;
    // }
    // Всегда прокручиваем вверх для новых страниц
    return { top: 0 };
  },
})

export default router



