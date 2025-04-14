<!-- ArticleItem.vue предназначен для вывода отдельной статьи -->
<script setup>

    const props = defineProps({ //Пропсы необходимы для получения данных извне компонента, в данном случае, конкретной статьи.
        article: {
            type: Object,
            required: true
        }
    })

</script>

<template>

    <div class="article-item">
        <h2 class="title-text"> {{ article.title }} </h2>
        <p class="post-desc-text"> {{ article.descriptionText }} </p>
  
        <ol class="footnotes-list">
            <li v-for="footnote in article.footnotes" :key="footnote.id" class="footnotes post-desc-text">{{ footnote.text }}</li>
        </ol>

        <img :src="article.imageUrl" :alt="article.title"> 

        <div class="info-block">    
            <a href="#" class="blog-card-text-date"> {{ article.date }} </a>
            <div class="route">
                <a href="#" class="blog-card-text-date"> {{ article.info }} </a>
                <a href="#" class="blog-card-text-date"> {{ article.infoRoute }} </a>
                <a href="#" class="blog-card-text-date"> {{ article.infoRouteLast }} </a>
            </div>
        </div>

        <p class="post-desc-text"> {{ article.description }} </p>
 
        <p class="post-desc-text"> {{ article.description }} </p>
  
        <div class="quotes">
            <span>,,</span>
            <h1 class="quotes-text">Какая-то умная и красивая <br>цитата</h1>   
        </div>

        <ul class="tags">
            <li v-for="tag in article.tags" :key="tag" class="blog-card-text-date">
                {{ tag }}
            </li>
        </ul>
    </div>
    
</template>

<!--
    Компонент предназначен для вывода отдельной статьи, содержащей заголовок, описание, картинку, сноски, цитату и теги. Он получает данные статьи через пропс article и динамически отображает эти данные с помощью стандартных возможностей Vue.js, таких как директивы v-for и интерполяция выражений ({{ expression }}).
-->