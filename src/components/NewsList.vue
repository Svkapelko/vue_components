<script setup>
    import { defineProps } from 'vue';
    import NewsItem from './NewsItem.vue';

    const props = defineProps({
        newsItems: Array,
    })

</script>

<template> 
    <div class="blog-wrapper">
        <div class="blog-top-news">
            <h1 class="title-text">Статьи & Новости</h1>
        </div>

    <div class="blog-content cards-container news-list">
        <NewsItem
            v-for="(item, index) in newsItems"
            :key="index"
            :title="item.title"
            :description="item.description"
            :imageUrl="item.imageUrl"
            :date="item.date"
        />
    </div>  
    </div>
    
  </template>

  <style scoped>

    .blog-wrapper {
        margin: 96px 360px 53px 360px;
        width: 100%;
        max-width: 1200px;
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
