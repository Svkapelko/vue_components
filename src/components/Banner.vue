
<script setup>

    import { ref } from 'vue';

    

</script>

<template>
    <div class="blog-banner">
        <div class="bannerBedroom">
            <div class="section-title">
                <h1 class="title-text">Статьи & <br> Новости</h1>
                <ul class="nav-footer">
                    <li class="nav-item nav-item-footer"><a href="#" @click.prevent="navigateToHome" class="nav-link">Домой /</a></li>
                    <li class="nav-item nav-item-footer"><a href="#" @click.prevent="navigateToBlog" class="nav-link">Блог</a></li>
                </ul>
            </div>
        </div>
    </div>
    
    
    
</template>

<style scoped>
.bannerBedroom {
    background-image: url('/bannerbedroom.jpeg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 356px;
   /* position: relative;*/
}


</style>
