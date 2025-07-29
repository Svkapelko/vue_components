<script setup>
import { defineProps } from "vue";
import { useRoute } from "vue-router";

const route = useRoute(); //hook useRoute для получения текущего маршрута
// Получаем входные данные через props
const props = defineProps({
  title: String,
  subtitle: String,
  imageUrl: String,
  bannerType: String, // Добавляем дополнительное свойство для динамических классов
  showLinks: Boolean,
});

// Создаем маппинг путей и русских названий
const routeNamesMap = {
  "/": "Главная",
  "/blog": "Блог",
  "/project": "Проект",
  "/404": "Страница не найдена",
  // Добавь остальные пути
};
// Получаем текущее название маршрута на русском языке
const currentRouteTitle = routeNamesMap[route.path] || "";

// Класс mainBanner применяется только на главной странице
const mainBanner = route.path === "/" ? "mainBanner" : "";
</script>

<template>
  <div class="banner">
    <div
      class="banner-content"
      :style="{ backgroundImage: `url(${props.imageUrl})` }"
      :class="['banner-class', props.bannerType, mainBanner]"
    >
      <!-- Только на главной странице отображаем текст и кнопку -->
      <div v-if="route.path === '/'" class="main-page-content">
        <div class="subcontent">
          <h1 class="sub-text h1-text flex-title">{{ props.title }}</h1>
          <p class="sub-p-text flex-p">{{ props.subtitle }}</p>
          <router-link to="/project" class="intro-button sub-p-text"
            >Начать
            <svg
              with="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="showLinks" class="section-title">
      <p class="title-text">{{ props.title }}</p>
      <ul class="nav-footer">
        <router-link to="/" class="nav-item-footer nav-link">Домой /</router-link>
        <p to="$route.path" class="nav-item-footer nav-link">{{ currentRouteTitle }}</p>
      </ul>
    </div>
  </div>
</template>
<style>
.banner-content {
  height: 356px;
  background-position: center center;
  background-size: cover;
}
.section-title p {
  text-align: center;
}
.mainBanner {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 53px 360px 96px 360px;
  background-size: cover;
  background-position: center;
  height: 758px;
  position: relative;
  overflow: hidden;
  border-radius: 70px;
  position: relative;
}
.subcontent h1 {
  width: 90%;
}
.subcontent p {
  width: 80%;
}
</style>
