<!-- ProjectGalleryItem.vue - компонент отображает отдельное изображение.-->
<script setup>
    import { defineProps } from 'vue';

    //Получаем изображение  тип макета через props
    const props = defineProps({
        image: Object,
        layout: String
    })
</script>

<template>
    <div class="gallery-item-card" :class="props.layout === 'square' ? 'square-card': 'rectangle-card'">
        <div class="gallery-item-image ">
           <img :src="image.src" :alt="image.alt" class="grid-item__img">
        </div>
        <div class="gallery-item-content project-card-content">
            <div class="flex-title-block">
                <p class="blog-card-text"> {{ image.text }} </p>
                <p class="text-heading"> {{ image.info }}</p> 
            </div>
            <div class="project-card-bottom">
                <a href="#">
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <!-- Круг -->
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"></circle>       
                        <!-- Стрелка -->
                        <svg x="30" y="25" width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </svg>                
                </a>            
            </div>


           
        </div>                 
    </div>
</template>

<style scoped>
    .gallery-item-card {
        width: 585px;
        /*height: 947px;*/
        overflow: hidden;
        margin-bottom: 64px;
    }

    .gallery-item-card::after {
        content: "";
        display: block;
        padding-bottom: 100%; /* Поддерживает квадратную форму (соотношение сторон 1:1) */
    }

   /* .rectangle-card {
        height: 947px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }*/

   /* .rectangle-card img {
        display: block;
        height: 853px;
        overflow: hidden;
        position: absolute;
    }*/

   /* .gallery-item-image {
        margin-bottom: 24px;
        position: relative;
    }*/

   /*.square-card {
        height: 616px;
        margin-bottom: 35px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }*/
    /*.square-card img  {
        display: block;
        height: 522px;
        overflow: hidden;
        position: absolute;
        left: -231px;
    } */

    /*.gallery-item-content {
        position: relative;
        top: 85%;
    }*/

   /* .grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}*/

.grid-sizer,
.grid-item {
  width: calc(25% - 20px); /* четыре колонки по 25% минус отступы */
}

.grid-item {
  float: left;
  margin-bottom: 20px;
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.grid-item__img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}
</style>