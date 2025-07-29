<script setup>
import { ref } from "vue";

const projectCards = ref([
  {
    id: 1,
    title: "Современная кухня",
    imageUrl: "/public/proj01.png",
    backgroundPositionClass: "top-left",
    alt: "Кухня",
    category: "Кухня",
    description: "Декор / Планировка",
  },
  {
    id: 2,
    title: "Современная кухня",
    imageUrl: "/public/proj02.png",
    backgroundPositionClass: "top-right",
    alt: "Кухня",
    category: "Кухня",
    description: "Декор / Планировка",
  },
  {
    id: 3,
    title: "Современная кухня",
    imageUrl: "/public/proj03.png",
    backgroundPositionClass: "bottom-left",
    alt: "Кухня",
    category: "Кухня",
    description: "Декор / Планировка",
  },
  {
    id: 4,
    title: "Современная кухня",
    imageUrl: "/public/proj04.png",
    backgroundPositionClass: "bottom-right",
    alt: "Кухня",
    category: "Кухня",
    description: "Декор / Планировка",
  },
]);
</script>

<template>
  <div class="project">
    
      <div class="project-top">
        <h1 class="title-heading">Следите за нашими проектами</h1>
        <p class="text-heading flex-p">
          <span>Хорошо известно, что читатель будет отвлекаться</span>
          <span>на читабельный контент страницы</span>
        </p>
      </div>
      <div class="project-content">
        <div v-for="(item, index) in projectCards" :key="index" class="project-card">
          <div
            class="project-card-image"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
            :class="['item-class', item.backgroundPositionClass]"
          ></div>
          <div class="project-card-content">
            <div class="flex-title-block">
              <p class="blog-card-text">{{ item.title }}</p>
              <p class="text-heading">{{ item.description }}</p>
            </div>
            <router-link
              :to="{ name: 'BlogDetails', params: { id: item.id } }"
              class="card-button"
            >
              <svg
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path
                  d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    
  </div>
</template>

<style scoped>
.project {
  margin: 0px 360px 30px 360px;
  width: 100%;
  max-width: 1200px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
 

.top-left {
  /*background-image: url(img/proj01.png);*/
  background-size: cover;
  background-position: center;
  border-radius: 0px 80px 0px 0px;
}

.top-right {
  /* background-image: url(img/proj02.png);*/
  background-size: cover;
  background-position: center;
  border-radius: 80px 0px 0px 0px;
}

.bottom-left {
  /*   background-image: url(img/proj03.png);*/
  background-size: cover;
  background-position: center;
  border-radius: 0px 0px 80px 0px;
}

.bottom-right {
  /*   background-image: url(img/proj04.png);*/
  background-size: cover;
  background-position: center;
  border-radius: 0px 0px 0px 80px;
}
</style>
