<!--компонент NewsItem.vue-->
<script setup>

    import { defineProps, computed } from 'vue';
    import { useRouter } from 'vue-router';
   
     // Получаем роутер
   /* const router = useRouter();*/

    const props = defineProps({
        id: Number,
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
    <div class="card news-item">
        <div class="card-content">
          <div class="blog-card-image card-header"> <!-- можно переименовать в news-card-->
            <img :src="props.imageUrl" :alt="props.title">  
            <p class="card-title blog-card-text-date">{{ props.title }}</p>
          </div>
          <div class="blog-card-content card-body">
            <p class="blog-card-text">{{ props.description }}</p>
            <p> описание {{ props.id }} </p>
          <div class="card-bottom">
            <p class="blog-card-text-date">{{ formattedDate }}</p>
            
            
    <router-link :to="{ name: 'BlogDetails', params: { id: props.id } }" class="card-button">
            Читать подробнее
    </router-link> 
      <!--      <button class="card-button">
              <img src="/public/vector.png" alt="vector">
            </button>   -->   
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