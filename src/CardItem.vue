<script setup>

    import { ref } from "vue";

    const products = ref([
        {
            title: 'Стол',
            description:'Изготовление на заказ по индивидуальным размерам.',
            price: 5000,
            reviewList: [                
                {
                    userName: 'Иван',
                    reviewText: 'очень хорошо',
                    rating: 5,
                },
                {
                    userName: 'Ольга',
                    reviewText: 'плохо',
                    rating: 3,
                },
                {
                    userName: 'Борис',
                    reviewText: 'отлично',
                    rating: 5,
                }
            ]
        },       
        {
            title: 'Диван',
            description:'Раскладной диван.',
            price: 15000,
            reviewList: [                
                {
                    userName: 'Елена',
                    reviewText: 'плохое качество',
                    rating: 2,
                },
                {
                    userName: 'Ольга',
                    reviewText: 'соотношщение цена качество',
                    rating: 5,
                },
                {
                    userName: 'Михаил',
                    reviewText: 'супер',
                    rating: 5,
                }
            ]
        },
        {
            title: 'Стул',
            description:'Стул мягкий, материал: дерево, металл, ткань.',
            price: 7000,
            reviewList: [                
                {
                    userName: 'Иван',
                    reviewText: 'удобный',
                    rating: 5,
                },
                {
                    userName: 'Валентина',
                    reviewText: 'мягкий',
                    rating: 5,
                },
                {
                    userName: 'Данил',
                    reviewText: 'отлично',
                    rating: 5,
                }
            ]
        }
    ]);

   
    
    // Функция для расчёта среднего рейтинга
    function calculateAverageRating(reviews) {
        if (!reviews.length) {
            return 0;
        } 
            return reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;      
    }

    // Функция для добавления нового отзыва
    function addReview(product, userName, reviewText, rating) {
        if (userName && reviewText && rating >= 1 && rating <= 5) {
                product.reviewList.push({
                    userName,
                    reviewText,
                    rating,
            });
            product.showReviews = true; // Показываем отзывы после добавления нового
            clearForm(); // Очищаем форму после отправки
        } else {
            alert('Пожалуйста, заполните все поля корректно.');
        }       
    }

    // Функция для очистки формы
    function clearForm() {
        userNameInput.value = '';
        reviewTextInput.value = '';
        ratingInput.value = 5;
    }

    // Данные для формы
    const userNameInput = ref('');
    const reviewTextInput = ref('');
    const ratingInput = ref(5);

</script>

<template>
    <ul class="product">
        <li 
        v-for="(product, index) in products" 
        :key="index"
        class="product-item"> 
            {{ product.title }} - {{  product.description }} - {{  product.price }}Rub 
           
            <button 
            @click="product.showReviews = !product.showReviews"
            class="review-button"> 
                {{ product.showReviews ? 'Скрыть ' : 'Показать ' }} отзывы
            </button> 

            <p 
            v-show="product.showReviews" 
             v-for="(review, index) in product.reviewList" 
            :key="index"> 
                Отзыв от {{ review.userName}} : {{ review.reviewText }}, оценка {{ review.raiting }}
            </p>

            <p 
            v-show="product.showReviews">
                Cредний рейтинг товара - {{ calculateAverageRating(product.reviewList) }}
            </p>

            <form 
            v-show="product.showReviews" 
            @submit.prevent="addReview(product, userNameInput, reviewTextInput, Number(ratingInput))"> 
                <h3>Оставьте свой отзыв</h3>
                Имя пользователя: 
                <input type="text" 
                placeholder="Введите свое имя" 
                v-model="userNameInput"> 
                <br />
                Текст отзыва: 
                <textarea 
                placeholder="Введите свой отзыв" 
                v-model="reviewTextInput" /> 
                <br />
                Оценка (от 1 до 5): 
                <input type="number" 
                v-model="ratingInput"> 
                <br />
                <button type="submit">Отправить</button>
            </form>
            
        </li>     
    </ul>

</template>

<style scoped>
    .product-item {
        border-bottom: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
    }

    textarea {
        width: 300px;
        height: 80px;
    }

    ul li {
        text-decoration: none;
        list-style-type: none;
    }

    .review-button {
        margin-top: 10px;
        display: flex;
    }

    


</style>