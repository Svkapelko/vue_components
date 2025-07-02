<script setup>
    console.log('AboutContent loaded!');
    import { useRoute } from 'vue-router';

    const route = useRoute();

    // param будет содержать часть после /about, если она есть
    const param = route.params.param;
</script>

<template>
    <div class="content">
        <h2>About page</h2>
        <p>{{ param ? 'Дополнительный параметр: ' + param : 'Страница About' }}</p>
    </div>
</template>

<style>
    .content {
        text-align: center;
        padding: 10px;
    }
</style>