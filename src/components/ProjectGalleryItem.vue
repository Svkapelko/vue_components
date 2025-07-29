<!-- ProjectGalleryItem.vue - компонент отображает отдельное изображение.-->
<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import MansoryWall from "./MansoryWall.vue";

const router = useRouter();
//Получаем изображение  тип макета через props
const props = defineProps({
  image: Object,
  id: String,
})

</script>

<template>
      <div class="gallery-item">
        <img :src="props.item.src" :alt="props.item.alt" class="item-img" />
        <div class="project-card-content">
          <div class="flex-title-block">
            <p class="blog-card-text">{{ props.item.text }}</p>
            <p class="text-heading">{{ props.item.info }}</p>
          </div>
          <router-link  
        :to="{ name: 'ProjectDetails', params: { id: item.id } }"
        class="project-card-button"
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="35" fill="#F4F0EC"></circle>
          <path
            transform="translate(30, 25)"
            d="M1 19L9 10L1 1"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="triangle"
          ></path>
        </svg>
          </router-link>
        </div>
      </div>
</template>

  

<!-- <masonry-wall :items="props.image" :ssr-columns="2" :column-width="585" :gap="16">
    <template #default="{ image, index }">
      <div :style="{ height: `${(index + 1) * 100}px` }">
        <h1>{{ image.title }}</h1>
        <span>{{ image.description }}</span>
      </div>
    </template>
  </masonry-wall> 
</template> -->
 <!--   <div
    class="gallery-item-card"
    :class="props.layout === 'square' ? 'square-card' : 'rectangle-card'"
  >
    <div class="gallery-item-image ">
      <img :src="image.src" :alt="image.alt" class="grid-item__img" />
    </div>
    <div class="project-card-content">
      <div class="flex-title-block">
        <p class="blog-card-text">{{ image.text }}</p>
        <p class="text-heading">{{ image.info }}</p>
      </div>
      <router-link
        :to="{ name: 'ProjectDetails', params: { id: props.image.id } }"
        class="project-card-button"
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="35" fill="#F4F0EC"></circle>
          <path
            transform="translate(30, 25)"
            d="M1 19L9 10L1 1"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="triangle"
          ></path>
        </svg>
      </router-link>
    </div>
  </div>-->
<!--  <div :class="['gallery-item-card', props.layout]">
    <img :src="props.image.src" :alt="props.image.alt" class="item-img" />
    <div class="caption">
      <h3>{{ props.image.text }}</h3>
      <p>Категория: {{ props.image.category }}</p>
    </div>
  </div> -->
<!--  <div
    class="gallery-item-card"
    :class="props.layout === 'square' ? 'square-card' : 'rectangle-card'"
  >
    <div class="gallery-item-image ">
      <img :src="image.src" :alt="image.alt" class="grid-item__img" />
    </div>
    <div class="project-card-content">
      <div class="flex-title-block">
        <p class="blog-card-text">{{ image.text }}</p>
        <p class="text-heading">{{ image.info }}</p>
      </div>
      <router-link
        :to="{ name: 'ProjectDetails', params: { id: props.image.id } }"
        class="project-card-button"
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="35" fill="#F4F0EC"></circle>
          <path
            transform="translate(30, 25)"
            d="M1 19L9 10L1 1"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="triangle"
          ></path>
        </svg>
      </router-link>
    </div>
  </div> -->

<!--  <div
    class="gallery-item"
    :class="props.layout === 'square' ? 'square-card' : 'rectangle-card'"
  >
    <div class="gallery-image">
      <img :src="image.src" :alt="image.alt" class="grid-item__img" />
    </div>
    <div class="project-card-content">
      <div class="flex-title-block">
        <p class="blog-card-text">{{ image.text }}</p>
        <p class="text-heading">{{ image.info }}</p>
      </div>
      <router-link
        :to="{ name: 'ProjectDetails', params: { id: props.image.id } }"
        class="project-card-button"
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="35" fill="#F4F0EC"></circle>
          <path
            transform="translate(30, 25)"
            d="M1 19L9 10L1 1"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="triangle"
          ></path>
        </svg>
      </router-link>
    </div>
  </div>-->


<style scoped>


/*.item {
  border: 1px solid black
}*/
.project-card-button:hover .triangle {
  transform: translate(40px, 45px) rotate(-180deg);
}
.gallery-item-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.item-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}


/*.gallery-item-card {
  width: 585px;
  overflow: hidden;
  margin-bottom: 64px;
}*/

/*.gallery-item {
  width: 585px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}*/



/*.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}*/
/*.gallery-item::after {
  content: "";
  display: block;
  padding-bottom: 100%; /* Поддерживает квадратную форму (соотношение сторон 1:1)
}*/

/*.rectangle-card {
  height: 947px;
}*/

/*.rectangle-card img {
  display: block;
  height: 853px;
  overflow: hidden;
  position: absolute;
}*/

/*.gallery-item-image {
  margin-bottom: 24px;
  position: relative;
}*/

/*.square-card {
  height: 616px;
}*/

/*.square-card img {
  display: block;
  height: 522px;
  overflow: hidden;
  position: absolute;
  left: -231px;
}*/

/*.gallery-item-content {
  position: relative;
  top: 85%;
}*/

 /*.grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.grid-sizer,
.grid-item {
  width: calc(25% - 20px); 
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
}*/
</style>
