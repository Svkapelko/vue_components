<!--Project.vue - основной компонент галлереи, кт объединяет фильтрацию и отображение.-->
<script setup>

    import {ref, computed, onMounted, nextTick } from 'vue';
    import Masonry from 'masonry-layout';
    import CategoriesFiltered from './CategoriesFiltered.vue';
    import ProjectGalleryItem from './ProjectGalleryItem.vue';


    const images = ref([
        { 
            id: 1, 
            src: '/bedroom-left_1.png',
            alt: 'Спальня', 
            category: 'Спальня',
            text: 'Минималистичная спальня',
            info: 'Декор / Планировка',
            layout: 'rectangle' // Для прямоугольных карточек
        },
        { 
            id: 2, 
            src: '/bedroom-right_1.png', 
            alt: 'Спальня', 
            category: 'Спальня',
            text: 'Минималистичная спальня',
            info: 'Декор / Планировка',
            layout: 'square' // Для квадратных карточек
        },
        { 
            id: 3, 
            src: '/bedroom-left_2.png', 
            alt: 'Спальня', 
            category: 'Спальня',
            text: 'Классическая спальня',
            info: 'Декор / Планировка',
            layout: 'square' // Для квадратных карточек
        },
        { 
            id: 4, 
            src: '/bedroom-right_2.png', 
            alt: 'Спальня', 
            category: 'Спальня',
            text: 'Современная спальня',
            info: 'Декор / Планировка',
            layout: 'rectangle' // Для прямоугольных карточек
        },
        { 
            id: 5,
            src: '/bedroom-left_3.png', 
            alt: 'Спальня', 
            category: 'Спальня',
            text: 'Минималистичный прикроватный столик',
            info: 'Декор / Планировка',
            layout: 'rectangle' // Для прямоугольных карточек
        },
        { 
            id: 6, 
            src: '/bedroom-right_3.png', 
            alt: 'Спальня', 
            category: 'Спальня',
            text: 'Столы и столики',
            info: 'Декор / Планировка',
            layout: 'square' // Для квадратных карточек
        },
        { 
            id: 7, 
            src: '/bedroom-left_4.png', 
            alt: 'Спальня', 
            category: 'Спальня',
            text: 'Современная спальня',
            info: 'Декор / Планировка',
            layout: 'square' // Для квадратных карточек
        },
        { 
            id: 8, 
            src: '/bedroom-right_4.png',  
            alt: 'Спальня', 
            category: 'Спальня',
            text: 'Современная спальня',
            info: 'Декор / Планировка',
            layout: 'square' // Для квадратных карточек
        },
        { 
            id: 9, 
            src: 'path/to/image8.jpg', 
            alt: 'Гостиная', 
            category: 'Гостиная'
        },
        { 
            id: 10, 
            src: 'path/to/image8.jpg', 
            alt: 'Ванная комната', 
            category: 'Ванная комната' 
        },
        { 
            id: 11, 
            src: 'path/to/image8.jpg', 
            alt: 'Кухня', 
            category: 'Кухня'
        },
        { 
            id: 12, 
            src: 'path/to/image8.jpg', 
            alt: 'Гостиная', 
            category: 'Гостиная' 
        }
    ]);

    const categories = ref(['Спальня', 'Гостиная', 'Ванная комната', 'Кухня']);

    const emit = defineEmits(['set-filter']);

    const currentFilter = ref(categories.value[0]);

    const filteredImages = computed(() => {
        return images.value.filter(image => image.category === currentFilter.value);
        });

    //Установка фильтра - обработчик для смены фильтра
    const setFilter = (category) => {
        currentFilter.value = category;
    }

        // Используем Masonry
    let masonryInstance;

    onMounted(() => {
    nextTick(() => {
        masonryInstance = new Masonry('.grid', {
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        });
    });
});

</script>

<template>
    <div class="project">
        <CategoriesFiltered  
            :categories="categories"      
            :currentFilter="currentFilter"
            @set-filter="setFilter"
        />
        <div class="project-gallery grid">
        <div class="grid-sizer"></div>
            <ProjectGalleryItem 
                v-for="image in filteredImages" 
                :key="image.id" 
                :image="image"
                :layout="image.layout"
                class="gallery-image grid-item"
            />           
        </div>
    </div>    
</template>

<style scoped>

    .project {
        padding-top: 180px;
        margin: 96px 360px 53px 360px;
        width: 100%;
        max-width: 1200px;
    }

    /*.project-gallery {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 35px;
    }*/

    .grid {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .grid-sizer,
    .grid-item {
        width: calc(50% - 20px); /* 2 колонки по 25% минус отступы */
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