<!-- FilterTags.vue -->
<script setup>
    import { ref, computed } from 'vue';

    const props = defineProps({
        articles: {
            type: Array,
            required: true
        }
    })
   
    const selectedTag = ref(null);

    // улучшенный вариант c использованием метода flatMap - избавляемся от дополнительного цикла и создаем уникальный набор тегов в одной строке. Здесь создается вычисляемое свойство uniqueTags, которое собирает все уникальные теги из всех статей. Оно использует flatMap для объединения всех тегов из каждой статьи в один массив - преобразует массив статей в единый массив тегов, а затем применяет Set для удаления дубликатов - создает новый массив из уникальных значений тегов.
    const uniqueTags = computed(() => {
      return [
        ...new Set(props.articles.flatMap(article => article.tags))
      ];
  });

    // Здесь объявляется событие для обновления тэга
    const emit = defineEmits(['update:selectedTag']) //Компонент определяет событие update:selectedTag, которое будет отправлено родительскому компоненту. Это позволит родительскому компоненту отслеживать изменения в выбранном теге.

    // Метод для выбора тега
    const selectTag = (tag) => {
      selectedTag.value = tag;
      emit('update:selectedTag', tag) // Отправляет событие update:selectedTag родительскому компоненту, передавая туда выбранный тег.
    } 
   
</script>

<template>
  <div class="blog-sidebar">
    <div class="tags">
      <h3 class="blog-card-text">Тэги</h3>
      <div class="tags-wrapper">
          <button 
            v-for="tag in uniqueTags" 
            :key="tag" 
            @click="selectTag(tag)" 
            :class="{ active: selectedTag === tag }"
            class="button-tags blog-card-text-date">
              {{ tag }}
          </button>
      </div>
    </div>
  </div>
</template>

<!-- Что происходит при взаимодействии с компонентом:
1.Инициализация: При монтировании компонента передается массив статей через пропс articles.
2.Сбор тегов: Из массива статей собираются все уникальные теги и сохраняются в вычисляемом свойстве uniqueTags.
3.Выбор тега: Пользователь нажимает на кнопку с тегом, вызывая метод selectTag. Этот метод устанавливает выбранный тег в selectedTag и отправляет событие родительскому компоненту.
4.Рендеринг: Каждый раз, когда меняется состояние selectedTag, шаблон автоматически перерисовывается, добавляя активный класс к активной кнопке. -->

<style>
    .button-tags.active  {
      color: rgb(244, 240, 236);
      background-color: black;
    }

</style>