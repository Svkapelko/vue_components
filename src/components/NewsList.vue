<script setup>

    import NewsItem from './NewsItem.vue';
    const props = defineProps({
        newsItems: Array,
    });

</script>

<template> 
    <div class="blog-top blog-top-news">
        <h1 class="title-text">Статьи & Новости</h1>
    </div>

    <div class="blog-content cards-container">
        <NewsItem
            v-for="(item, index) in newsItems"
            :key="index"
            :title="item.title"
            :description="item.description"
            :imageUrl="item.imageUrl"
            :date="item.date"
        />
    </div>  
  </template>

