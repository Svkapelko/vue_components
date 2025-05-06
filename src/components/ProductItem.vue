<!-- components/ProductItem.vue Карточка товара, отображаемая в списке.-->
<script setup>

    // Получаем продукт и функцию для обработки кликов
    const props = defineProps({
        product: Object,
        openDetails: Function
    })

</script>

<template>
    <button @click="props.openDetails(props.product)">
        <span> {{ product.name }} </span> <br>
        <small> {{ product.available ? 'Доступен': 'Нет в наличии' }}</small>
    </button>
</template>

<style scoped>
    button {
        display: block;
        border-radius: 10px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: all .2s ease-in-out;
        margin-left: 10px;
        padding: 5px 5px;
    }

    button span {
       font-weight: bold;
    }

    button small {
        opacity: 0.7;
        font-size: 8px;
    }

    button:hover {
        background-color: #dcdcdc;
    }
</style>