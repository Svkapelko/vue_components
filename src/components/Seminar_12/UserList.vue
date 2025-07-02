<!-- Создайте компонент "Список пользователей" (UserList), кт
будет отображать список пользователей из переданного массива.
Каждый пользователь должен быть представлен в виде отдельного
компонента "Пользователь" (User), принимающего пропсы с данными
о пользователе (например, имя, фамилия и электронная почта). 
Компонент должен иметь возможность отображать дополнительные детали  по требованию пользователя -->
<script setup>

    import  { ref, defineProps} from 'vue';
    import User from './User.vue';

    // Получаем массив пользователей через prop
    const props = defineProps({
        userList: Array,
        userData: Object,
    })

    // Обновляем пользователя по событию
    const updateUser = (userData) => {
        console.log('userData',userData)
        // Надо найти нужный объект из нашего массива используя метод Find
        const user = userList.value.find((user) => user.id === userData.id)       
        if (user) {
            user.name = userData.name,
            user.surname = userData.surname,
            user.email = userData.email
        } else {
            alert ('Пользователь не найден')
        } 
    }
     
    // При таком раскладе, компонент UserList примет массив пользователей и создаст для каждого отдельный компонент User, отображая имена, фамилии и электронные адреса пользователей.
    const userList = ref([
            {
                id: 1,
                name: 'John',
                surname: 'Smith',
                email: 'user1@example.com',
                phone: '(389) 768-9952',
                age: 37,
                city: 'NY',
                address: '944-2600 Ullamcorper Road'

            },
            {
                id: 2,
                name: 'Helen',
                surname: 'Blanch',
                email: 'user2@example.com',
                age: 35,
                city: 'NY',
                phone: '(389) 876-1132',
                address: '914-4560 Ullamcorper Road'
            },
            {
                id: 3,
                name: 'Ann',
                surname: 'Down',
                email: 'user3@example.com',
                age: 42,
                city: 'Brooklin',
                phone: '(389) 123-4567',
                address: '714-7890 Ullamcorper Avenue'
            },
            {
                id: 4,
                name: 'Sam',
                surname: 'Black',
                email: 'user4@example.com',
                age: 40,
                city: 'Brooklin',
                phone: '(387) 168-1152',
                address: '515-2600 Corper Road'
            },
            {
                id: 5,
                name: 'David',
                surname: 'Brew',
                email: 'user5@example.com',
                age: 38,
                city: 'NY',
                phone: '(389) 126-9958',
                address: '244-2600 Broadway Avenue'
            }
        ])

</script>

<template>
    <div class="users-container">
        <h2>Список пользователей</h2>
        <User 
            v-for="user in userList" 
            :key="user.id" 
            :user-data="user" 
            @update-user="updateUser"
        />
    </div>
</template>

<style scoped>
    .users-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
        margin-bottom: 10px;
    }
</style>