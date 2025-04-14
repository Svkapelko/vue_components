<script setup>


</script>





<template>

    <div class="blog-content cards-container">
        <div v-for="(item, index) in cards" :key="index" class="card">
            <div class="blog-card-image card-header">
                <img :src="item.imageUrl" :alt="item.title">
                <p class="card-title blog-card-text-date"> {{ item.title }} </p>
            </div>
            <div class="blog-card-content card-body">
                <p class="blog-card-text"> {{ item.description }} </p>
                <div class="card-bottom">
                    <p class="blog-card-text-date"> {{ item.date}} </p>
                    <button class="card-button"><a href="#"><img src="img/Vector.png" alt="button"></a></button>
                </div>
            </div>
        </div>
    </div>

</template>