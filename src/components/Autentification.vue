<script setup>
//Создайте компонент "Аутентификация" (Authentication), который будет отображать форму входа или сообщение об успешной аутентификации в зависимости от переданного пропса isAuthenticated. Используйте директиву v-if для условного отображения разных элементов в шаблоне компонента.

    import { ref } from 'vue';

    const isAuthenticated = ref(false);
    const userLogin = ref('');
    const userPassword = ref('');

    const formCheck = () => {
        if (userLogin.value && userPassword.value) {
            isAuthenticated.value = true;
        } else {

        }
    }


</script>




<template>
    <form v-if="!isAuthenticated" action="#">
        <label for="login">Логин</label>
        <input type="text" id="login" v-model="userLogin">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="userPassword">
        <button @click="formCheck" type="submit">Войти</button>
    </form>
    <h3 v-else>Авторизация пройдена успешно!</h3>

</template>