<!-- компонент BlogHomePage.vue-->
<script setup>
import { ref, inject, computed } from "vue";
import NewsItem from "./NewsItem.vue";

const newsItems = ref([
  {
    id: 1,
    title: "Дизайн кухни",
    imageUrl: "src/assets/img/blog1.png",
    description: "Создадим лучший макет перепланировки",
    date: new Date("2022-12-26"),
  },
  {
    id: 2,
    title: "Дизайн дома",
    imageUrl: "src/assets/img/blog2.png",
    description: "Лучшие интерьерные идеи по низкой цене",
    date: new Date("2022-12-22"),
  },
  {
    id: 3,
    title: "Дизайн интерьера",
    description: "Лучшие интерьерные решения для офисов",
    date: new Date("2022-12-25"),
    imageUrl: "src/assets/img/blog3.png",
  },
  {
    id: 4,
    title: "Дизайн кухни",
    imageUrl: "src/assets/img/blog1.png",
    description: "Создадим лучший макет перепланировки",
    date: new Date("2022-12-26"),
  },
  {
    id: 5,
    title: "Дизайн дома",
    imageUrl: "src/assets/img/blog2.png",
    description: "Лучшие интерьерные идеи по низкой цене",
    date: new Date("2022-12-22"),
  },
  {
    id: 6,
    title: "Дизайн интерьера",
    imageUrl: "src/assets/img/blog6.png",
    description: "Лучшие интерьерные решения для офисов",
    date: new Date("2022-12-25"),
  },
]);

// Берём только первые три новости
const topThreeNews = computed(() => {
  return newsItems.value.slice(0, 3);
});
</script>

<template>
  <section class="home-news-section">
    <div class="blog-wrapper">
      <div class="blog-top">
        <h1 class="title-heading flex-title">
          <span class="first-line">Статьи</span>
          <span class="second-line">& Новости</span>
        </h1>
        <p class="text-heading flex-p">
          <span>Хорошо известно, что читатель будет отвлекаться</span>
          <span>на читабельный контент страницы</span>
        </p>
      </div>
      <div class="blog-content cards-container news-list">
        <NewsItem
          v-for="newsItem in topThreeNews"
          :key="newsItem.id"
          :id="newsItem.id"
          :title="newsItem.title"
          :description="newsItem.description"
          :imageUrl="newsItem.imageUrl"
          :date="newsItem.date"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
