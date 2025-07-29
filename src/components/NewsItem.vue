<!--компонент NewsItem.vue-->
<script setup>
import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";

// Получаем роутер
const router = useRouter();

const props = defineProps({
  id: Number,
  index: Number,
  title: String,
  description: String,
  imageUrl: String,
  date: Date,
});

const formattedDate = computed(() => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("ru-RU", options).format(new Date(props.date));
});
</script>

<template>
  <div class="card news-item">
    <div class="card-content">
      <div class="blog-card-image card-header">
        <!-- можно переименовать в news-card-->
        <img :src="props.imageUrl" :alt="props.title" />
        <p class="card-title blog-card-text-date">{{ props.title }}</p>
      </div>
      <div class="blog-card-content card-body">
        <p class="blog-card-text">{{ props.description }}</p>
        <div class="card-bottom">
          <p class="blog-card-text-date">{{ formattedDate }}</p>
          <router-link
            :to="{ name: 'BlogDetails', params: { id: props.id } }"
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
.card:hover {
  background-color: rgb(244, 240, 236);
}

.card:hover svg circle {
  fill: white; /* меняем цвет круга внутри SVG при наведении */
}
</style>
