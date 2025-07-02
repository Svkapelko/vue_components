<script setup>
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    const router = useRouter()
    const route = useRoute()

    const search = computed({
        get() {
            return route.query.search ?? ''
        },
        set(search) {
            route.replace({ query: {search} })
        }
    })
</script>


<template>
    <div class="content">
        <h2>Dashboard page</h2>
        <label>
            Search: <input v-model.trim="search" maxlength="20">   
        </label>
    </div> 
    
</template>

<style>
    .content {
        text-align: center;
        padding: 30px;
    }
</style>