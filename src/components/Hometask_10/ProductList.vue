<!-- components/ProductList.vue выводит список товаров и передает ссылку на функцию для вызова открытия деталей..-->
<script setup>

/*Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности. Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".*/

    import ProductItem from '../../ProductItem.vue'

    //  Получаем товары и функцию обратного вызова
    const props = defineProps({ /*Объявление входных параметров компонента*/
        products: Array,
        openDetails: Function
    });

</script>

<template>
    <header>
        <h1>Интернет-магазин</h1>
    </header>
    <main>
        <div 
            v-for="product in products" 
            :key="product.id"       
            class="product-details">
                <ProductItem 
                    :product="product" 
                    :open-details="openDetails"/>
        </div>

    </main>
</template>

<style scoped>
    body {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        color: #333;
    }

    header h1 {
        font-size: 20px;
        margin-left: 20px;
        margin-bottom: 20px;
        text-align: left;
    }

    .product-details {
        margin-left: 20px;
    }

</style>