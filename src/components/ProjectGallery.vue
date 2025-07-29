<!--Project.vue - основной компонент галлереи, кт объединяет фильтрацию и отображение.-->
<script setup>
import { ref, computed, onMounted, nextTick, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import CategoriesFiltered from "./CategoriesFiltered.vue";
import MasonryWall from "@yeger/vue-masonry-wall";

const router = useRouter();
const route = useRoute();

const images = ref([
  {
    id: 1,
    src: "/bedroom-left_1.png",
    alt: "Спальня",
    category: "Спальня",
    text: "Минималистичная спальня",
    info: "Декор / Планировка",
    layout: "rectangle", // Для прямоугольных карточек
    height: 853
  },
  {
    id: 2,
    src: "/bedroom-right_1.png",
    alt: "Спальня",
    category: "Спальня",
    text: "Минималистичная спальня",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 522
  },
  {
    id: 3,
    src: "/bedroom-left_2.png",
    alt: "Спальня",
    category: "Спальня",
    text: "Классическая спальня",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 522
  },
  {
    id: 4,
    src: "/bedroom-right_2.png",
    alt: "Спальня",
    category: "Спальня",
    text: "Современная спальня",
    info: "Декор / Планировка",
    layout: "rectangle", // Для прямоугольных карточек
    height: 853
  },
  {
    id: 5,
    src: "/bedroom-left_3.png",
    alt: "Спальня",
    category: "Спальня",
    text: "Минималистичный прикроватный столик",
    info: "Декор / Планировка",
    layout: "rectangle", // Для прямоугольных карточек
    height: 853
  },
  {
    id: 6,
    src: "/bedroom-right_3.png",
    alt: "Спальня",
    category: "Спальня",
    text: "Столы и столики",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 522
  },
  {
    id: 7,
    src: "/bedroom-left_4.png",
    alt: "Спальня",
    category: "Спальня",
    text: "Современная спальня",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 522
  },
  {
    id: 8,
    src: "/bedroom-right_4.png",
    alt: "Спальня",
    category: "Спальня",
    text: "Современная спальня",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 522
  },
  {
    id: 9,
    src: "/public/bannerbedroom.jpeg",
    alt: "Спальня",
    category: "Спальня",
    text: "Современная спальня",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 853
  },
  {
    id: 10,
    src: "/public/kitch_art2.png",
    alt: "Кухня",
    category: "Кухня",
    text: "Современная кухня",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 853
  },
  {
    id:11,
    src: "/public/kitch_art1.png",
    alt: "Кухня",
    category: "Кухня",
    text: "Современная кухня",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 522
  },
  {
    id: 12,
    src: "/public/PrDetailsBanner.jpeg",
    alt: "Гостинная",
    category: "Гостиная",
    text: "Современная гостиная",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 522
  },
  {
    id: 13,
    src: "/public/blogphoto.jpeg",
    alt: "Ванная комната",
    category: "Ванная комната",
    text: "Современная ванная комната",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 853
  },
  {
    id: 14,
    src: "/bedroom-right_4.png",
    alt: "Спальня",
    category: "Спальня",
    text: "Современная спальня",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 522
  },
  {
    id: 15,
    src: "/public/proj04.png",
    alt: "Ванная комната",
    category: "Ванная комната",
    text: "Современная ванная комната",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 853
  },
  {
    id: 16,
    src: "/bedroom-right_4.png",
    alt: "Гостиная",
    category: "Гостиная",
    text: "Современная гостинная",
    info: "Декор / Планировка",
    layout: "square", // Для квадратных карточек
    height: 853
  }
]);
const favorites = ref([]);
const categories = ref(["Спальня", "Гостиная", "Ванная комната", "Кухня"]);
const currentFilter = ref(categories.value[0]);
/*const currentFilter = ref(0);*/

// Определяем общее количество изображений на странице (можно изменить)
const imagesPerPage = 4;

const currentPage = ref(1);
/*const currentPage = computed(()=>{
        const page = Number(route.params.page) || 1;
        return page;
    })*/



const filteredImages = computed(() => {
  return images.value.filter((image) => image.category === currentFilter.value);
});

// Отфильтрованные и порезанные изображения по страницам
const paginatedImages = computed(() => {
  const startIndex = (currentPage.value - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  return filteredImages.value.slice(startIndex, endIndex);
});

//Установка фильтра - обработчик для смены фильтра
const setFilter = (category) => {
  currentFilter.value = category;
  currentPage.value = 1; // Важно: сброс страницы на первую при смене категории!
};

// Всего страниц
const totalPages = computed(() => Math.ceil(filteredImages.value.length / imagesPerPage));

// Функция для перехода на выбранную страницу
const goToPage = (page) => {
  currentPage.value = page;
};

// Проверка, добавлено ли изображение в избранное
const isFavorite = (image) => favorites.value.includes(image.id)

// Добавить/удалить изображение в избранное
const toggleFavorite = (image) =>{
  if (isFavorite(image)) {
    favorites.value = favorites.value.filter(id => id !== image.id);
  } else {
    favorites.value.push(image.id);
  }
}

// Сохранение избранных изображений в localStorage
onMounted(()=> {
  const savedFavorites = localStorage.getItem('favorites');
  if (savedFavorites) {
    favorites.value = JSON.parse(savedFavorites)
  }
})

watch(favorites,(newValue) => {
  localStorage.setItem('favorites',JSON.stringify(newValue));
}, { deep: true });

</script>

<template>
<!--   <div class="project">
    <CategoriesFiltered
      :categories="categories"
      :currentFilter="currentFilter"
      @set-filter="setFilter"
    />
    <div class="project-gallery grid">
      <div class="gallery-wrapper">
        <ProjectGalleryItem
          v-for="image in paginatedImages"
          :key="image.id"
          :image="image"
          :layout="image.layout"
          class="gallery-item grid-item"
        />
      </div>
      <div class="pagination">
        <button
          class="pagination-button"
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: page === currentPage }"
        >
          <svg
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.5"
              cy="26"
              r="25.5"
              stroke="#CDA274"
              :fill="currentPage === page ? '#f4f0ec' : 'none'"
            />
          </svg>
          <span class="page-number"> {{ page }} </span>
        </button>
      </div>
    </div>

  </div> -->
    <div class="project-box">
    <CategoriesFiltered
      :categories="categories"
      :currentFilter="currentFilter"
      @set-filter="setFilter"
    />
    <div class="project-gallery">
      <MasonryWall 
        :items="paginatedImages" 
        :ssr-columns="2" 
        :column-width="585" 
        :gap="15">
          <template #default="{ item }"> 
          <div
            :style="{ height: `${item}px`}"
            class="gallery-item"           
          >        
            <img :src="item.src" :alt="item.alt" class="gallery-item-img" /> 
            <div class="caption project-card-content">
              <div class="flex-title-block">
                <p class="blog-card-text">{{ item.text }}</p>
                <p class="text-heading">{{ item.info }}</p>
              </div>
              <div class="favorite-button">
                <i
                  @click="toggleFavorite(item)" 
                  :class="isFavorite(item) ? 'fas fa-star' : 'far fa-star'"
                  :style="{ color: isFavorite(item) ? 'rgb(255, 169, 40)' : 'rgb(245, 245, 245)' }"
                  aria-label="{{ isFavorite(item) ? 'Удалить из избранного' : 'Добавить в избранное' }}"
                  role="button"
                  tabindex="0"
                  ></i>
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
      </MasonryWall>               
    </div>
    <div class="pagination">
        <button
          class="pagination-button"
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: page === currentPage }"
        >
          <svg
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.5"
              cy="26"
              r="25.5"
              stroke="#CDA274"
              :fill="currentPage === page ? '#f4f0ec' : 'none'"
            />
          </svg>
          <span class="page-number"> {{ page }} </span>
        </button>
    </div>
  </div>
</template>

<style>


.project-box {
  padding-top: 180px;
  margin: 96px 360px 53px 360px;
  width: 100%;
  max-width: 1200px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.project-gallery {
  margin-top: 61px;

}

.gallery-item {
  width: 585px;
  overflow: hidden;
  position: relative;
}

.gallery-item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card-button:hover .triangle {
  transform: translate(40px, 45px) rotate(-180deg);
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  cursor: pointer;
  transition: color 0.3s;
  border: none;
  
}


.pagination {
  margin-top: 61px;
  margin-bottom: 173px;
}
.pagination-button {
  position: relative;
  border: none;
  background-color: #fff;
  border-radius: 100%;
  stroke-width: 1px;
  stroke: #cda274;
  cursor: pointer;
  padding: 0px;
  margin-right: 20px;
}
.pagination-button:hover {
  background-color: #f4f0ec;
}

.page-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Jost";
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  color: #292f36;
}
</style>
