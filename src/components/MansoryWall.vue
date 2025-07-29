<script setup>
import MasonryWall from '@yeger/vue-masonry-wall';
import { ref } from 'vue';

const items = [
  {
    title: 'First',
    description: 'The first item.',
  },
  {
    title: 'Second',
    description: 'The second item.',
  },
]
 /*const items= ref([50, 75, 75, 100, 50, 50, 75, 150, 125, 175, 50, 100, 125])*/
</script>

<template>
<masonry-wall :items="items" :ssr-columns="2" :column-width="100" :gap="16">
    <template #default="{ item, index }">
      <div :style="{ height: `${item}px` }"
       class="mansory-item flex items-center justify-center">
        
        <h1>{{ item.title }}</h1>
        <span>{{ item.description }}</span>
      </div>
    </template> 
  </masonry-wall>
   
  
</template>

<style>
.mansory-item{
    border:1px solid black
}
.masonry-grid {
    margin:auto;
    column-count:2;
}
.masonry-grid img, 
.masonry-grid .col-block {
    max-width: 100%;
    margin-bottom: 16px;
    border: 6px solid #BFE2FF;  
    box-sizing: border-box;  
    box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);    
    transition: all 0.3s linear;
}
.masonry-grid img:hover, 
.masonry-grid .col-block:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
}
.col-block {
    padding: 2px 20px; 
}


</style>