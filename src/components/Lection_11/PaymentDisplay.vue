<!-- PaymentDisplay.vue -->
<script setup>
    import { ref, defineProps, computed } from 'vue';

    const props = defineProps({
        items: Array,
        info: String,
    })
  
    // Computed для текущего времени
    const getCurrentDate = computed(() => {
        const today = new Date();
        const d = today.getDate()
        const m = today.getMonth() + 1
        const y = today.getFullYear()
        return `${d}.${m}.${y}`
    })

    const getFullPaymentValue = computed(() => {
        return props.items.reduce((sum, current) => sum + current.value, 0);
    
    })


</script>

<template>
    <div class="title"> {{ info }} </div>
    <div class="title"> All expences: {{ getFullPaymentValue }} </div>
    <div v-for="item in items" :key="item.id">
        <div class="content">          
            <div class="content_item"> {{ item.date }}</div>
            <div class="content_item"> {{ item.category }}</div>
            <div class="content_item"> {{ item.value }}</div>
        </div>
    </div>
</template>

<style scoped>

    .title {
        margin: 10px 15px;
        text-align: center;
    }
    .content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 10px 15px;    
    }
    .content__item {
        padding: 8px 16px;
        border: 1px solid #ccc;
    }
</style>