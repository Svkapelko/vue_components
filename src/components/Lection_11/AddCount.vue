
<script setup>

    import { ref, onBeforeMount, onMounted, onUpdated } from 'vue';
    const counter = ref(2);
    const upCounter = () => {
        counter.value++;
    }

    // в <script setup> хуки жизненного цикла записываются с помощью специальной инструкции onBeforeMount, onMounted и т.д., а не прямым указанием функций. некоторые хуки жизненного цикла в <script setup> устарели или вообще не поддерживаются. Хуки onBeforeCreate и onCreated больше не используются в новом синтаксисе Vue 3 (<script setup>). Функционал, который раньше выполнялся этими хуками, теперь автоматически включается самим компилятором Vue.

    // Хук beforeMount
    onBeforeMount(() => {
        console.log('beforeMount');
    });

    // Хук mounted
    onMounted(() => {
        console.log('mounted');
    });

    // Хук updated
    onUpdated(() => {
        console.log('updated');
    });

</script>

<template>
    <div>
        <h3>Счетчик</h3>
        <button @click="upCounter"> Значение счетчика равно {{ counter }}</button> 
       
    </div>

</template>

<style>
    div {
        margin: 10px 10px 10px 10px;
    }
</style>