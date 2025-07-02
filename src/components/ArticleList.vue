<!-- ArticleList.vue отвечает за отображение списка статей и фильтрацию по тегам.-->
<script setup>
    import { computed } from 'vue';
    import ArticleItem from './components/ArticleItem.vue';

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

// Фильтрация статей 
const filteredArticles = computed(() => {
  if (props.selectedTag) {
        return props.articles.filter(article => article.tags.includes(props.selectedTag))
  } else {
      return props.articles
  } 
}) // Это вычисляемое свойство, которое возвращает либо полный список статей (если selectedTag равен null), либо отфильтрованный список статей, содержащие указанный тег. Используется метод filter, который проверяет наличие тега в массиве tags каждой статьи.


/*const uniqueTags = computed(() => {
  const allTags = []
  props.articles.forEach(article => {
    allTags.push(...article.tags)
  })
  return [...new Set(allTags)]
}) */
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