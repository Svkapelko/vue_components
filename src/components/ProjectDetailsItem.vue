<script setup>
import { useRoute } from "vue-router";
import { useArticleStore } from "@/stores/project-details";
import { ref, computed } from "vue";

const route = useRoute();
const articleStore = useArticleStore();
const articleId = Number(route.params.id);

// Получаем статью по id
const article = computed(() => {
  return articleStore.getArticleById(articleId);
});

// Начальный индекс слайда
const currentIndex = ref(0);

// Начальный индекс слайда
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % article.value.images.length;
};

// Предыдущий слайд
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + article.value.images.length) % article.value.images.length;
};

// Переход на произвольный слайд
const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class="project-details-article project-details-wrapper">
    <h1 class="title-text title-flex">{{ article.title }}</h1>
    <p class="post-desc-text">{{ article.text }}</p>
    <div class="slider">
      <img :src="article.images[currentIndex]" :alt="Слайд" class="slider-image" />
      <div class="search">
        <i class="fas fa-search"></i>
      </div>
    </div>
    <div class="slider_pagination">
      <button @click="prevSlide"><</button>

      <div class="dots">
        <span
          v-for="(img, index) in article.images"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>

      <button @click="nextSlide">></button>
    </div>
  </div>
</template>

<style>
.project-details-article {
}
.project-details-wrapper {
  margin: 200px 360px 107px 360px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.project-details-article p {
  margin-top: 11px;
  width: 50%;
}

.title-flex {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}

.slider {
  margin-top: 103px;
  overflow: hidden;
  position: relative;
  width: 1201px;
  height: 799px;
  border-radius: 70px;
}

.slider-image {
  /*width: 100%;*/
  /*display: block;*/
  position: relative;

  /* width: 1201px;
  height: 799px;*/
  left: -120px;

  top: -700px;
  /*bottom: -1232px;*/
}

.slider_pagination {
  display: flex;
  justify-content: center;
}

.slider_pagination button {
  background-color: #fff;
  border: none;
  font-weight: 400;
  font-size: 25px;
  cursor: pointer;
  color: #4d5053;
}

.fa-search {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  right: 10px; /* Расстояние от правого края */
  width: 132px; /* Ширина фона с лупой */
  height: 132px; /* Высота фона с лупой */
  line-height: 132px; /* Центровка вертикальной оси */
  text-align: center; /* Горизонтальное центрование */
  background-color: #f0f0f0; /* Цвет фона */
  border-radius: 50%; /* Округлый фон */
  color: rgb(205, 162, 116); /* Цвет шрифта (лупы) */
  font-size: 2em; /* Размер лупы */
  cursor: pointer; /* Курсор руки */
}
.dots {
  margin: 21px;
}

.dots span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid #4d5053;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s;
}

.dots span.active {
  background-color: #4d5053;
}
</style>
