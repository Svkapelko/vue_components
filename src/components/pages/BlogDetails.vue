<!--страница BlogDetails.vue-->
<script setup>
import { ref, computed } from "vue";
import Header from "../Header.vue";
import BannerComp from "../BannerComp.vue";
import ArticleList from "../ArticleList.vue";
import FilterTags from "../FilterTags.vue";
import Footer from "../Footer.vue";
import { useRoute } from "vue-router"; // Получаем идентификатор поста из маршрута

/* const route = useRoute();
  const articleId = route.params.id; */
const articles = ref([
  {
    id: 1,
    title: "Создадим лучший макет перепланировки",
    description:
      "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
    imageUrl: "/src/assets/img/kitch_art1.png",
    date: "26 Декабря, 2022",
    info: "Интерьер /",
    infoRoute: "Домой /",
    infoRouteLast: "Декор",
    tags: ["кухня"],
  },
  {
    id: 2,
    title: "Лучшие интерьерные идеи по низкой цене",
    description:
      "В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
    imageUrl: "/src/assets/img/kitch_art2.png",
    date: "18 Декабря, 2022",
    info: "Интерьер /",
    infoRoute: "Домой /",
    infoRouteLast: "Декор",
    tags: ["кухня"],
  },
  {
    id: 3,
    title: "Лучшие интерьерные решения для офисов",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quae odio id quis in qui, eius itaque, dicta fugiat enim deleniti. Amet, neque dolorem tenetur possimus voluptate molestias recusandae reprehenderit dolorum obcaecati earum provident sapiente quis a illo consequatur beatae praesentium? Unde doloremque deleniti labore nihil amet velit consectetur iste?",
    imageUrl: "/src/assets/img/kitchen.png",
    date: "1 Декабря, 2022",
    info: "Интерьер /",
    infoRoute: "Домой /",
    infoRouteLast: "Декор",
    tags: ["здание", "архитектура"],
  },
  {
    id: 4,
    title: "Создадим лучший макет перепланировки,Design sprints are great",
    description:
      "В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
    imageUrl: "/src/assets/img/kitch_art1.png",
    descriptionText:
      "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ",
    date: "20 Декабря, 2022",
    info: "Интерьер /",
    infoRoute: "Домой /",
    infoRouteLast: "Декор",
    tags: ["кухня"],
    footnotes: [
      {
        id: 1,
        text:
          "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.",
      },
      {
        id: 2,
        text:
          "Этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.",
      },
      {
        id: 3,
        text: "С того времени этот, похожий на латинский.",
      },
    ],
  },
  {
    id: 5,
    title: "Лучшие интерьерные идеи по низкой цене",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis et aperiam unde ipsam doloremque, expedita incidunt, enim iste consectetur perferendis vel repudiandae asperiores consequatur",
    imageUrl: "/src/assets/img/kitch_art2.png",
    descriptionText:
      "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ",
    date: "18 ноября, 2022",
    info: "Интерьер /",
    infoRoute: "Домой /",
    infoRouteLast: "Декор",
    tags: ["планировка", "спальня"],
    footnotes: [
      {
        id: 1,
        text:
          "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.",
      },
      {
        id: 2,
        text:
          "Этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.",
      },
    ],
  },
  {
    id: 6,
    title: "Лучшие интерьерные решения для офисов",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quae odio id quis in qui, eius itaque, dicta fugiat enim deleniti. Amet, neque dolorem tenetur possimus voluptate molestias recusandae reprehenderit dolorum obcaecati earum provident sapiente quis a illo consequatur beatae praesentium? Unde doloremque deleniti labore nihil amet velit consectetur iste?",
    imageUrl: "/src/assets/img/kitchen.png",
    date: "10 Декабря, 2022",
    info: "Интерьер /",
    infoRoute: "Домой /",
    infoRouteLast: "Декор",
    tags: ["здание", "архитектура"],
  },
]); // Ищем статью по id

/*const article = computed(() => {
    return articles.value.find(article => article.id.toString() === articleId);
  }); */ const selectedTag = ref(
  null
);

const updateSelectedTag = (tag) => {
  selectedTag.value = tag; // Обновляем выбранный тег
};

/*  const showAllArticles = ref(false); // Контроль отображения списка статей
    const toggleShowAllArticles = () => {
      showAllArticles.value = !showAllArticles.value;
    };  // Обработчик клика на кнопку */
</script>

<template>
  <Header />
  <main>
    <BannerComp imageUrl="/public/Photobd.png" />

    <div class="blog-wrapper">
      <div class="blog-main">
        <ArticleList :articles="articles" :selectedTag="selectedTag" />
        <FilterTags :articles="articles" @update:selectedTag="updateSelectedTag" />
      </div>
    </div>
  </main>
  <Footer />
</template>

<style></style>
