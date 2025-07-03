<script setup>

</script>

<template>
    <div class="blog-banner">
        <div class="banner-wrapper">
            <div class="section-title">
                <h1 class="title-text">Статьи & <br> Новости</h1>
                <ul class="nav-footer">
                    <router-link to="/" class="nav-item-footer nav-link">Домой</router-link>
                    <router-link to="/blog" class="nav-item-footer nav-link">Блог</router-link>  
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .banner-wrapper {
        background-image: url(/src/assets/img/kitchen.png);
        height: 356px;
        background-position: center center;
    }

    .section-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 25%;
        left: 40%;
        width: 503px;
        padding: 41px 78px;
        border-radius: 37px 37px 0px 0px;
        background: rgb(255, 255, 255);
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

    .nav-footer {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 9px;
        margin-top: 9px;
    }

    .nav-item-footer {
        margin: 9px 0px;
    }

    .nav-link-footer {
        text-align: left;
    }

</style>