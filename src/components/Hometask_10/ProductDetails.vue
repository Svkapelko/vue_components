<!-- components/ProductDetails.vue  - Отображает полный набор данных о выбранном товаре и позволяет вернуться обратно к списку товаров.-->
<script setup>
    
    import { ref, computed } from 'vue';

    // Получаем активные данные и обратный вызов функций из app.vue
    const props = defineProps({
        product: Object,
        openDetails: Function,
        backToList: Function
    })

    // Форматированное отображение цены
    const formattedPriceRub = (product) => computed(() => 
        `RUB ${product.price.toFixed(2)}` //метод .toFixed(2) помогает округлить результат до необходимой точности-двух знаков после запятой
    )

    // Ссылки для хранения данных
    const loading = ref(true);
    const errorMessage = ref('');
    const calculated = ref(false); // Будет использоваться для контроля отображения результата

    // Курс доллара (будет заполняться автоматически)
    const usdExchangeRate = ref(0);

    // Функция загрузки курса доллара
    async function fetchUsdRate() {
       try {
            loading.value = true;
            const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.statusText}`);        
            }
            const data = await response.json();
             // Проверяем, что есть Валюта USD и поле Value
            if (data.Valute && data.Valute.USD && data.Valute.USD.Value) {
                usdExchangeRate.value = data.Valute.USD.Value;
                loading.value = false;
                calculated.value = true; // Меняем флаг после успешного получения курса
            } else {
                throw new Error('Ошибка в структуре данных!');
            }
            
        } catch (err) {
            errorMessage.value = err.message;
            loading.value = false;
        }
    }

    // Расчет стоимости товара в долларах
    const formattedPriceUsd = computed(() => {
        if (loading.value || !usdExchangeRate.value) {
            return '';
        } else {
            return `$ ${(props.product.price / usdExchangeRate.value).toFixed(2)}` ;
        }
    })

    // Действия при нажатии на кнопку пересчета
    const recalculate = () => {
        fetchUsdRate();
    }
</script>


<template>    
    <div class="product-details">  
        <h3> {{ product.name }} </h3>
        <p> {{ product.available ? 'Доступен' : 'Нет в наличии' }}</p> 
        <p> {{ product.description }}</p> 
        <p> {{ product.addionalInfo }} </p>

        <div class="price-block"> 
            <p> {{ formattedPriceRub(product) }} </p> 
            <button @click="recalculate"> Пересчитать
            <!-- {{ loading ? 'Идет загрузка...' : 'Пересчитать' }} -->
            </button> 
            <p v-if="calculated && formattedPriceUsd">Эквивалент в долларах: {{ formattedPriceUsd }} </p>
            <p v-else-if="errorMessage" style="color: red;">Ошибка: {{ errorMessage }}</p>
        </div>    

        <button @click="props.backToList">Вернуться к списку</button>
    </div>     
</template>

<style scoped>
    .product-details {
        margin-left: 30px;
        margin-top: 20px;       
    }

    h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    p {
        font-size: 12px;
        line-height: 1.5;
        margin-bottom: 5px;
    }

    button {
        display: inline-block;
        padding: 10px 10px;
        background-color: #f0f0f0;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all .2s ease-in-out;
        font-size: 12px;
        margin: 0px 10px 25px 10px;  
    }

    button:hover {
        background-color: #dcdcdc;
    }

   
    .price-block {
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }
</style>