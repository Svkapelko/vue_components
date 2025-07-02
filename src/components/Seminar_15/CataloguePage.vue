<script setup>
    import { ref, computed, onMounted, watch} from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    const router = useRouter()
    const route = useRoute()

    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            description : "This is product 1's description",
        },
        {
            id: 2,
            name: "Product 2",
            price: 85,
            description : "This is product 2's description",
        },
        {
            id: 3,
            name: "Product 3",
            price: 148,
            description : "This is product 3's description",
        },
        {
            id: 4,
            name: "Product 4",
            price: 55,
            description : "This is product 5's description",
        },
        {
            id: 5,
            name: "Product 5",
            price: 198,
            description : "This is product 5's description",
        },
        {
            id: 6,
            name: "Product 6",
            price: 79,
            description : "This is product 6's description",
        },
        {
            id: 7,
            name: "Product 7",
            price: 235,
            description : "This is product 7's description",
        },
        {
            id: 8,
            name: "Product 8",
            price: 276,
            description : "This is product 8's description",
        },
        {
            id: 9,
            name: "Product 9",
            price: 64,
            description : "This is product 9's description",
        },
        {
            id: 10,
            name: "Product 10",
            price: 164,
            description : "This is product 10's description",
        },
        {
            id: 11,
            name: "Product 11",
            price: 299,
            description : "This is product 11's description",
        },
        {
            id: 12,
            name: "Product 12",
            price: 165,
            description : "This is product 12's description",
        },
        {
            id: 13,
            name: "Product 13",
            price: 350,
            description : "This is product 13's description",
        },
        {
            id: 14,
            name: "Product 14",
            price: 289,
            description : "This is product 14's description",
        },
        {
            id: 15,
            name: "Product 15",
            price: 234,
            description : "This is product 15's description",
        },
        {
            id: 16,
            name: "Product 16",
            price: 322,
            description : "This is product 16's description",
        },
        {
            id: 17,
            name: "Product 17",
            price: 66,
            description : "This is product 17's description",
        },
        {
            id: 18,
            name: "Product 18",
            price: 347,
            description : "This is product 18's description",
        },
        {
            id: 19,
            name: "Product 19",
            price: 459,
            description : "This is product 19's description",
        },
        {
            id: 20,
            name: "Product 20",
            price: 325,
            description : "This is product 20's description",
        },
    ]

    // Определяем общее количество товаров на странице (можно изменить)
    const perPage = 5;

    const currentPage = computed(()=>{
        const page = Number(route.params.page) || 1;
        return page;
    })

    // Всего страниц
    const totalPages = computed(() => Math.ceil(products.length / perPage))


    const paginatedCatalogue = computed(() => {
        const startIndex = (currentPage.value - 1 ) * perPage;
        const endIndex = startIndex + perPage;
        return products.slice(startIndex, endIndex)
    })

    // Обновляем страницу при изменении маршрута
    watch(() => route.params.page, () => {
        window.scrollTo(0, 0); // Скроллим страницу вверх при смене страницы
    });

    // Используем onMounted для начальной печати данных
    onMounted(()=> {
        console.log('Полный путь',route.fullPath);
        console.log('Параметры', route.params);
        console.log('Запрос', route.query);
        console.log('Название маршрута',route.name)
    }) 

</script>

<template>
<!--<h3>Current page: {{ currentPage }}</h3> -->
    <div class="product-list">
        <div v-for="product in paginatedCatalogue" :key="product.id" class="product-card">
            <h3>Name: {{ product.name }}</h3>
            <p><strong>Price:</strong> {{ product.price }}</p>
            <p>Description: {{ product.description }}</p>
        </div>
    </div>
    

   <div v-for="page in totalPages" :key="`page${page}`" class="pagination">
        <router-link 
            :to="`/catalogue/${page}`">        
            {{ page }}
        </router-link>
    </div>  

    <!--  Второй способ  
    <div class="pagination">
    <router-link
      v-for="page in totalPages"
      :key="page"
      :to="`/catalogue/${page}`"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </router-link>
  </div> 
  -->

</template>

<style scoped>

    h3 {
        padding: 20px;
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
        padding: 30px;
    }

    .product-card {
        background-color: #fefefe;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .product-card:hover {
        background-color: lightgray;
    }

    .product-card h2 {
        font-size: 1.5em;
        margin-bottom: 10px;
    }

    .product-card strong {
        color: gray;
    }

    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .pagination a {
        margin: 0 5px;
        padding: 5px 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        text-decoration: none;
        color: black;
    }

    .pagination a:hover {
        background-color: lightgrey;
    }
</style>