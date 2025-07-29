<script setup>
import { ref, defineProps, computed } from "vue";
import NewsItem from "./NewsItem.vue";

const props = defineProps({
  newsItems: Array,
  id: Number
});

const newsItemsPerPage = 3;
const currentPage = ref(1);

// Порезанные изображения по страницам
const paginatedNewsItems = computed(() => {
  const startIndex = (currentPage.value - 1) * newsItemsPerPage;
  const endIndex = startIndex + newsItemsPerPage;
  return props.newsItems.slice(startIndex, endIndex);
});
// Всего страниц
const totalPages = computed(() => Math.ceil(props.newsItems.length / newsItemsPerPage));

// Функция для перехода на выбранную страницу
const goToPage = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div class="blog-wrapper">
    <div class="blog-top-news">
      <h1 class="title-text">Статьи & Новости</h1>
    </div>
    <div class="blog-content">
      <NewsItem
        v-for="(newsItem, index) in paginatedNewsItems"
        :key="index"
        :id="newsItem.id"
        :title="newsItem.title"
        :description="newsItem.description"
        :imageUrl="newsItem.imageUrl"
        :date="newsItem.date"
      />
    </div>
    <div class="pagination">
      <button
        class="pagination-button"
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="{ active: page === currentPage }"
      >
        <svg
          width= "53"
          height="52"
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="26.5"
            cy="26"
            r="25.5"
            stroke="#CDA274"
            :fill="currentPage === page ? '#f4f0ec' : 'none'"
          />
        </svg>
          <span class="page-number"> {{ page }} </span>
        </button>
    </div>
    
  </div>
</template>

<style>
.blog-wrapper {
  margin: 96px 360px 53px 360px;
  width: 100%;
  max-width: 1200px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.blog-top-news {
  margin-top: 88px;
}

.title-text {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 2%;
  text-align: left;
}
</style>
