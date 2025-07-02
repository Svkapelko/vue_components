<!-- Сделаем возможность отреадктировать данные пользователя -->
<script setup>
    import { ref, defineProps, defineEmits } from 'vue';

    const props = defineProps({
        userData: Object,
    })

     // Объявляем emits для передачи изменений
    const emit = defineEmits(['update-user']);

    // Локальное состояние для отображения деталей
    const showMore = ref(false);

    // Функция для перуключения флага showMore
    const toggleInfo = () => { 
        showMore.value = !showMore.value
    }

    // Локальные копии (копии наших пропсов) для редактирования
    const nameToEdit = ref(props.userData.name); 
    const surnameToEdit = ref(props.userData.surname);
    const emailToEdit = ref(props.userData.email)

    // Функция для сохранения изменений
  /*  const saveChanges = () =>{
        // Обновляем данные пользователя
        props.userData.name = nameToEdit.value;
        props.userData.surname = surnameToEdit.value;
        props.userData.email = emailToEdit.value;
    } */

    // Можно сделать по-другому: через $emit -  но у него толкьо один параметр, поэтому надо создать объект и туда передать все,что нам надо

    const saveChanges = () => {
        const updatedUser = {
            id: props.userData.id,
            name: nameToEdit.value,
            surname: surnameToEdit.value,
            email: emailToEdit.value,
        }
        
        // Передаем обновленного пользователя через событие - можно пере6дать только один параметр - создадим объект и туда кладем то, что мы хотим изменить
        emit('update-user', updatedUser);
        // Закрываем окно редактирования
        showMore.value = false;
        console.log('updatedUser', updatedUser);
    } 
</script>

<template>
    <div class="user-card">
        <p>Имя: {{ userData.name }}</p>  
        <p>Фамилия: {{ userData.surname }}</p>
        <p>Электронная почта: {{ userData.email }}</p> 
        <button @click="toggleInfo">{{ showMore ? 'Скрыть детали' : 'Показать детали' }}</button>

        <!-- Отображаем детали, если состояние showMore истинно -->
        <div v-if="showMore" class="details">
            <div> {{ userData.name }} </div>
            <label for="name">Имя: <input id="name" name="name" type="text" v-model="nameToEdit"></label>
            <label for="surname">Фамилия: <input id="surname" name="surname" type="text" v-model="surnameToEdit"></label>
            <label for="email">Электронная почта: <input id="email" name="email" type="email" v-model="emailToEdit"></label>
            
            <p>Возраст: {{ userData.age }}</p>
            <p>Город проживания: {{ userData.city }}</p>
            <p>Телефон: {{ userData.phone }}</p>
            <p>Адрес: {{ userData.address }}</p>  

            <button @click="saveChanges">Сохранить изменения</button>      
        </div>
    </div>
</template>

<style scoped>
    .user-card {
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid #eee;
        border-radius: 8px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

    .details {
        margin-top: 10px;
        padding: 10px;
        border: 1px dashed #aaa;
        border-radius: 8px;
        background-color: #fff;
    }

</style>
