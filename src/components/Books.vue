<script setup>

/* Разработка приложения для создания инфьрмации о книгах. Создать компонет Книга (Book), кт будет отобраджать инфо о книге - название, автор, год издания. Компонент должен иметь возможность отображать доп.детали о книге по запросу читателя. Тж необх-мо создать компонет Список книг(BookList), кт будет отображать список книг из переданного массива.*/
    import { computed, ref } from 'vue';

    const books = ref([
        {
            id: 1,
            title: 'Книга 1',
            author: 'Автор 1',
            publicationYear: 2019,
            description: 'Описание книги 1',
        //  showDescription: false
        },
        {
            id: 2,
            name: 'Книга 2',
            author: 'Автор 2',
            publicationYear: 2024,
            description: 'Описание книги 2',
        // showDescription: false
        }
    ])

    const descriptionsToShow = ref([]); //создадим пустой масиив, кт будет наполняться либо очищаться по id


        const toggleDescription = (id) => {
            const findIndex = descriptionsToShow.value.indexOf(id);
            if (findIndex === -1) {
                descriptionsToShow.value.push(id)
            } else {
                descriptionsToShow.value.splice(findIndex, 1)
            }
        } //у нас есть массив в id книг/товаров, у кт нужно показать описание - мы его добавляем, если еще не добавлено и удаляем, если уже добавлено - это чистое решение, кт никак не влияет на исходные данные и 
</script>

<template>

    <div v-for="book in books" :key="book.id">        
        <p> Название книги: {{ book.title }} </p>
        <button @click="toggleDescription(book.id)">Показать описание</button>
        <ul v-if="descriptionsToShow.includes(book.id)"> 
            <li> Автор: {{ book.author }} </li>
            <li> Год издания: {{ book.publicationYear }} </li>
            <li> Описание: {{ book.description }}</li>           
        </ul>

    </div>
   

</template>