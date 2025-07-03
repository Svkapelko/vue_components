<script setup>

    import { defineProps, computed } from 'vue';

    const props = defineProps({
        title: String,
        description: String,
        imageUrl: String,
        date: Date,
    });

    const formattedDate = computed(() => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('ru-RU', options).format(new Date(props.date));
    });

</script>

<template>
    <div class="card">
        <div class="card-content">
          <div class="blog-card-image card-header"> <!-- можно переименовать в news-card-->
            <img :src="imageUrl" :alt="title">
            <p class="card-title blog-card-text-date">{{ props.title }}</p>
          </div>
          <div class="blog-card-content card-body">
            <p class="blog-card-text">{{ props.description }}</p>
          <div class="card-bottom">
            <p class="blog-card-text-date">{{ formattedDate }}</p>
            <button class="card-button"><a href="#">
              <img src="/public/vector.png" alt="vector">
            </a></button>
          </div>
        </div>
      </div>      
    </div>
  </template>

  <style scoped>
    /*.card:hover {
        background-color: rgb(244, 240, 236);
    }*/
  </style>