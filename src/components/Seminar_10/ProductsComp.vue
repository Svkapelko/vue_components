<script setup>

/* Разработать интерфейс корзины товаров, в котором пользователь может изменять количество товаров в корзине и видеть общую сумму покупки. Каждый товар представлен в виде блока, содержащего поле ввода для изменения количества товара и отображение его цены. При изменении количества товаров в поле ввода, необходимо автоматически пересчитывать стоимость каждого товара и обновлять общую сумму покупки. 

Разработка приложения для создания инфьрмации о книгах. Создать компонет Книга (Book), кт будет отобраджать инфо о книге - название, автор, год издания. Компонент должен иметь возможность отображать доп.детали о книге по запросу читателя. Тж необх-мо создать компонет Список книг(BookList), кт будет отображать список книг из переданного массива. - Сделаем на примере products.
*/
    import { computed, ref } from 'vue';

    const products = ref([
        {
            id: 1,
            name: 'Продукт 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque',
            quantity: 2,
            price: 10
        },
        {
            id: 2,
            name: 'Продукт 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque',
            quantity: 2,
            price: 15

        }
    ])

    const totalPrice = computed(()=> products.value.reduce((sum, cur) => sum + cur.price * cur.quantity, 0));


</script>

<template>

    <div v-for="product in products" :key="product.id">        
        <input type="number" v-model="product.quantity"> 
        <p> Название товара: {{ product.name }} </p>
        <p> Цена: {{ product.price }} </p>
        <p> Подитог: {{ product.quantity*product.price }}</p>
    </div>
    <p> Общая стоимость корзины: {{ totalPrice }}</p>

</template>