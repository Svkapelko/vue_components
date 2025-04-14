<script setup>
   import { ref, computed } from 'vue';

   const imgList = ref([
    {
        url: 'https://avatars.mds.yandex.net/i?id=9cf6613e7627cff9d863e66d1a2ca285a5a349c2-13217575-images-thumbs&n=13'
    },
    {
        url: 'https://avatars.mds.yandex.net/i?id=44cfd85fe37b02b6a67b6499302a47c7-4399581-images-thumbs&n=13'
    },
    {
        url: 'https://avatars.mds.yandex.net/i?id=87ec2e1a00fe4dd353bb42c4e3952a48e65c2986-9844111-images-thumbs&n=13'
    }
]);

    const currentImgIndex = ref(0);

    // Вычисляемое свойство для получения URL текущего изображения
   const currentImgUrl = computed(() => imgList.value[currentImgIndex.value].url);

    // Возвращаем нужные переменные и вычисляемые свойства для использования в шаблоне Метод defineExpose необходим только тогда, когда компонент экспортирует свои внутренние данные или методы наружу для использования другими компонентами. Поскольку в нашем случае мы не экспортируем ничего вовне, defineExpose можно убрать.
    /*defineExpose({
        imgList,
        currentImgIndex,
        currentImgUrl,
    });*/

    // Функция для выбора изображения по индексу
    function imgSelectIndex(index) {
        currentImgIndex.value = index;
    }

</script>

<template>
    <div>
        <img class="big" :src="currentImgUrl" alt="">
    </div>
    <div>
        <!-- <img 
        v-for="(img, index) in imgList" 
        :key="index" 
        :src="img.url" 
        alt=""
        class="mini" 
        @click="currentImgIndex = index" > можно сделать через метод еще-->
        <img 
        v-for="(img, index) in imgList" 
        :key="index" 
        :src="img.url" 
        alt=""
        class="mini" 
        @click="imgSelectIndex(index)" >
    </div>

</template>

<style scoped>
    .mini {
        width: 200px;
        height: 150px;
        margin: 10px 15px 10px 15px;
    }

    .big {
        width: 800px;
    }

</style>