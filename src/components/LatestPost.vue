<!-- LatestPost.vue -->
<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        title: String,
        description: String,
        imageUrl: String,
        date: Date,
    });

    const formattedDate = computed(() => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date( props.date))
    })

</script>

<template>
     <div class="blog">
        <div class="blog-wrapper">
            <div class="latest-post"> <!-- потом переименовать в latest post -->
                <h1 class="title-text">Последний пост</h1>
                <div class="latest-post-content">
                    <div class="latest-post-card">
                        <div class="latest-post-card-image">
                            <img :src="imageUrl" :alt="title">
                        </div>
                        <div class="latest-post-card-desc">
                            <h2 class="blog-card-text">{{ props.title }}</h2>
                            <p class="latest-post-card-desc-text">{{ props.description }}</p>
                            <div class="card-bottom">
                                <p class="blog-card-text-date">{{ formattedDate }}</p>
                                <button class="card-button">
                                    <a href="#">
                                        <img src="/public/vector.png" alt="vector">
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<style scoped>
    .blog-wrapper {
        margin: 96px 360px 53px 360px;
        width: 100%;
        max-width: 1200px; 
    }

    .latest-post {
        padding-top: 212px;
    }

    .latest-post-content { /* переименован из post-content */
        display: flex;
        flex-direction: row;
        margin-top: 27px;
    }

    .latest-post-card {
        width: 100%;
        height: 540px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 65px;
        border: 1px solid #e7e7e7;
        border-radius: 62px;
        padding: 21px;
        overflow: hidden;
        position: relative;
        padding-bottom: 20px
    }

    .latest-post-card-image {
        width: 569px;
        height: 478px;
        border-radius: 50px;
        background: rgb(196, 196, 196);
        position: relative;
        overflow: hidden;
    }

    .latest-post-card-image img {
        left: -42.5px;
        right: -153.5px;
        top: 15px;
        bottom: -47px;
        width: 765px;
        display: block;
        position: absolute;
    }

    .latest-post-card-desc {
        margin-right: 34px;
    }

    .latest-post-card-desc h2 {
        margin-bottom: 22px;
    }

    .latest-post-card-desc-text {
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
    }

    .blog-card-text {
        color: rgb(41, 47, 54);
        font-family: 'DM Serif Display';
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
    }

    .blog-card-text-date {
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
        text-transform: capitalize;
    }

    .card-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    }

    .card-button {
        background: rgb(244, 240, 236);
        border-radius: 40px;
        border: none;
        width: 52px;
        height: 52px;
        right: 0;
    }

     .card-button :hover {
        transform: rotate(180.00deg);
    }
</style>