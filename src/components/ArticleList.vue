<!-- ArticleList.vue отвечает за отображение списка статей и фильтрацию по тегам.-->
<script setup>
    import { computed } from 'vue';
    import ArticleItem from './ArticleItem.vue';

  const props = defineProps({
    articles: {
      type: Array,
      required: true
    },
    selectedTag: {
      type: String,
      default: null
    }
  })

const filteredArticles = computed(() => {
  if (props.selectedTag) {
        return props.articles.filter(article => article.tags.includes(props.selectedTag))
  } else {
      return props.articles
  } 
}) 

</script>

<template>

  <div class="articles"> <!-- Рендеривание статей -->
    <div v-for="article in filteredArticles" :key="article.id">
      <ArticleItem :article="article"/>
    </div>
  </div>
  <!-- Цикл v-for проходит по массиву отфильтрованных статей (filteredArticles).
Для каждой статьи создается экземпляр компонента ArticleItem, которому передается статья через пропс article. Ключевым элементом в цикле является идентификатор статьи (article.id), что гарантирует уникальность каждого элемента в списке. -->

</template>