<!-- AddPaymentForm.vue -->
<script setup>

    import { ref, computed } from 'vue';

    // Определение списка event'ов, которые будут эмитироваться
    const emit = defineEmits(['addNewPayment'])

    // Ссылки для хранения данных
    const value = ref('');
    const category = ref('');
    const date = ref('');

    // Computed для текущего времени
    const getCurrentDate = computed(() => {
        const today = new Date();
        const d = today.getDate()
        const m = today.getMonth() + 1
        const y = today.getFullYear()
        return `${d}.${m}.${y}`
    })

    // Функция сохранения платежа
    const onSaveClick = () => {
        const finalAmount = Number(value.value); // Безопасно превращаем в число
        if (finalAmount >= 0 && category.value.length > 0) {
            const data = {
                value: +finalAmount,
                category: category.value,
                date: date.value || getCurrentDate.value,
            };
        emit('addNewPayment', data); // Отправляем событие
        } else {
            alert('Все поля должны быть заполнены.');
        }
    };
            


</script>

<template>
    <form action="#" @submit.prevent>
        <input type="text" placeholder="Value" v-model="value">
        <input type="text" placeholder="Category" v-model="category">
        <input type="date" placeholder="Date" v-model="date">
        <button @click="onSaveClick">Save</button>   
    </form>
</template>

<style scoped>
    form {
        margin: 10px 15px;
    }

    .form input {
        margin-left: 10px;
    }

    button {
        margin-left: 15px;
        padding: 10px 15px;
        display: inline-block;
        background-color: #f0f0f0;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }


</style>