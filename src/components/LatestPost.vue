<!-- LatestPost.vue -->
<script setup>
    import { ref, computed } from 'vue';

    const props = defineProps({
        title: String,
        description: String,
        imageUrl: String,
        date: Date,
    });

    const formattedDate = computed(() => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('ru-RU', options).format(new Date(props.date))
    })

</script>

<template>
    <div class="post"> <!-- потом переименовать в latest post -->
        <h1 class="title-text">Последний пост</h1>
        <div class="post-content"> <!-- избыточный класс, потом убрать, стили от пост контент добавить в пост контент кард -->
            <div class="post-content-card">
                <div class="card card-news">
                        <div class="blog-card-image image-news">
                            <img :src="imageUrl" :alt="title">
                        </div>
                        <div class="post-desc">
                            <h2 class="blog-card-text">{{ title }}</h2>
                            <p class="post-desc-text">{{ description }}</p>
                            <div class="card-bottom">
                                <p class="blog-card-text-date">{{ formattedDate }}</p>
                        <!-- <button class="card-button"><a href="#"><img src="src/assets/img/vector.png" alt="button"></a></button> -->
                                <button class="card-button"><a href="#"></a></button>

                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
 

</template>