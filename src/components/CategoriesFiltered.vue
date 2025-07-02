<!--CategoriesFiltered.vue - компонент отвечает за отображение и обработку фильтров-->
<script setup>
    import { defineProps, defineEmits } from 'vue';

    // Получаем список категорий через props
    const props = defineProps({
        categories: Array,
        currentFilter: String,
    })

    // Объявляем событие для передачи выбранной категории
    const emit = defineEmits(['set-filter'])

    // Установка фильтра
    const setFilter = (category) => {
        emit('set-filter', category);
    }
</script>

<template>
    <div class="filters">
        <button class="filter-text"
            v-for="category in props.categories"
            :key="category"
            @click="setFilter(category)"
            :class="{ active: category === props.currentFilter }"
        >
            {{ category }}
        </button>     
    </div>

</template>

<style scoped>
    .filters {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 16px 50px;
        margin: 10px 0px;
        border: 1px solid rgb(205, 162, 116);
        border-radius: 18px;
        box-sizing: content-box;
        width: 65%;
    }

    .filters button.active {
        color: white;
        background: rgb(205, 162, 116);
        padding: 26px 66px;
        border-radius: 18px;
        box-sizing: border-box;
    }

    .filter-text {
        color: rgb(41, 47, 54);
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: center;
        border-style: none;
        background-color: white;
        cursor: pointer;
        transition: background-color 0.3s;
    }
</style>