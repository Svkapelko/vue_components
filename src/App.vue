<!-- App.vue  -->
<script setup>
  //import HelloWorld from './components/HelloWorld.vue'
  //import TheWelcome from './components/TheWelcome.vue'
  //import NewComponent from './components/NewComponent.vue';
  //import GalleryComp from './GalleryComp.vue';
  //import CardItem from './CardItem.vue';
  
  import { ref, computed } from 'vue';
  import Header  from './components/Header.vue';
  //import FilterTags from './components/FilterTags.vue';
  //import ArticleList from './components/ArticleList.vue';

  import BlogBannerArticlesNews from './components/BlogBannerArticlesNews.vue';
  //import BlogBannerFilteredArticles from './BlogBannerFilteredArticles.vue';
  import LatestPost from './components/LatestPost.vue';

  import NewsList from './components/NewsList.vue';


  import Footer from './components/Footer.vue';
  
  const newsItems = [
    {
      title: 'Дизайн кухни',
      imageUrl: 'src/assets/img/blog1.png',
      description: 'Создадим лучший макет перепланировки', 
      date: new Date('2022-12-26'),
    },
    {
      title: 'Дизайн дома',
      imageUrl: 'src/assets/img/blog2.png',
      description: 'Лучшие интерьерные идеи по низкой цене',
      date: new Date('2022-12-22'),
    },
    {
      title: 'Дизайн интерьера',
      description: 'Лучшие интерьерные решения для офисов',
      date: new Date('2022-12-25'),
      imageUrl: 'src/assets/img/blog3.png'
    },
    {
      title: 'Дизайн кухни',
      imageUrl: 'src/assets/img/blog1.png',
      description: 'Создадим лучший макет перепланировки', 
      date: new Date('2022-12-26'),
    },
    {
      title: 'Дизайн дома',
      imageUrl: 'src/assets/img/blog2.png',
      description: 'Лучшие интерьерные идеи по низкой цене',
      date: new Date('2022-12-22'),
    },
    {
      title: 'Дизайн интерьера',
      imageUrl: 'src/assets/img/blog6.png',
      description: 'Лучшие интерьерные решения для офисов',
      date: new Date('2022-12-25'),
    },
  ]

  const posts = ref([
    {
      id: 1,
      title: 'Low Cost ',
      description: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
      imageUrl: 'src/assets/img/post_image.png',
      date: new Date('2022-11-20')
    },
    {
      id: 2,
      title: 'Another Post Title',
      description: 'This is another post with different content.',
      imageUrl: 'src/assets/img/post_image.png',
      date: new Date('2022-12-30'),
    },
    {
      id: 3,
      title: 'Low Cost Latest Invented Interior Designing Ideas',
      description: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице',
      imageUrl: 'src/assets/img/latest_post.png',
      date: new Date('2022-12-26')
    },

  ])

  const latestPost = computed(() => posts.value.slice(-1)[0]); //Метод slice(startIndex, endIndex) создает новую копию части исходного массива, начиная с индекса startIndex и заканчивая индексом endIndex (не включительно). Если startIndex отрицательный, он отсчитывается с конца массива.Здесь slice(-1) берет последний элемент массива, а [0] извлекает первый (и единственный) элемент из результирующего массива.


  const articles = ref([
    {
            id: 1,
            title: 'Создадим лучший макет перепланировки',
            description: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
            imageUrl: '/src/assets/img/kitch_art1.png',
            date: '26 Декабря, 2022',
            info: 'Интерьер /', 
            infoRoute: 'Домой /', 
            infoRouteLast: 'Декор',
            tags: ['кухня']
    },
    {
            id: 2,
            title: 'Design sprints are great',
            description: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
            imageUrl: '/src/assets/img/kitch_art2.png',
            descriptionText:'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
            date: '20 Декабря, 2022', 
            info: 'Интерьер /', 
            infoRoute: 'Домой /', 
            infoRouteLast: 'Декор',
            tags: ['кухня'],
            footnotes: [
              {
              id: 1,
              text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
            },
            {
              id: 2,
              text: 'Этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
            },
            {
              id: 3,
              text: 'С того времени этот, похожий на латинский.',
            },
          ]
    },
    {
            id: 3,
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quae odio id quis in qui, eius itaque, dicta fugiat enim deleniti. Amet, neque dolorem tenetur possimus voluptate molestias recusandae reprehenderit dolorum obcaecati earum provident sapiente quis a illo consequatur beatae praesentium? Unde doloremque deleniti labore nihil amet velit consectetur iste?',
            imageUrl: '/src/assets/img/kitch_art1.png',
            date: '18 Декабря, 2022', 
            info: 'Интерьер /', 
            infoRoute: 'Домой /', 
            infoRouteLast: 'Декор',
            tags: ['здание', 'архитектура'],
    },
    {
            id: 4,
            title: 'Lorem Ipsum Dolor',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis et aperiam unde ipsam doloremque, expedita incidunt, enim iste consectetur perferendis vel repudiandae asperiores consequatur',
            imageUrl: '/src/assets/img/kitch_art2.png',
            descriptionText:'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
            date: '15 Декабря, 2022', 
            info: 'Интерьер /', 
            infoRoute: 'Домой /', 
            infoRouteLast: 'Декор',
            tags: ['планировка', 'спальня'],
            footnotes: [
              {
              id: 1,
              text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
            },
            {
              id: 2,
              text: 'Этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
            },
          ]
    }
  ])

  const selectedTag = ref(null);

  const updateSelectedTag = (tag) => {
    selectedTag.value = tag;
  }
</script>

<template>
  <div id="app">
    
      <Header />
  <!--    <div class="blog-banner">
          <div class="blog-banner-wrapper"></div>
      </div> -->
      <BlogBannerArticlesNews />
  <!--<BlogBannerFilteredArticles />-->
      <div class="blog">
        <div class="blog-wrapper">
        <LatestPost
          v-if="latestPost"
          :title="latestPost.title"
          :description="latestPost.description"
          :imageUrl="latestPost.imageUrl"
          :date="latestPost.date"/>
        <NewsList :newsItems="newsItems" />

   <!-- <div class="blog-wrapper blog-details-wrapper">
          <div class="blog-main">
            <ArticleList 
              :articles="articles" 
              :selectedTag="selectedTag"/>
            <FilterTags 
              :articles="articles" 
              @update:selectedTag="updateSelectedTag"/>            
          </div>
        </div> -->
      </div>
    </div>
      <Footer />
   
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- <HelloWorld msg="Welcome!" /> 
      <NewComponent /> -->
      <!-- <GalleryComp /> -->
      <!-- <CardItem /> -->
      <!-- <ArticleList />   
    </div>
  </header>

  <main>
     <!-- <TheWelcome />
   
    <NewComponent /> 
    <GalleryComp /> -->
  <!--</main> -->
  
</template>

<style scoped>
/*header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}*/
</style>
