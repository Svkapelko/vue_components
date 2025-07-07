<!--страница BlogPage.vue-->
<script setup>
    import { ref, computed } from 'vue';
    import Header from '../Header.vue';
    import BlogBannerArticlesNews from '../BlogBannerArticlesNews.vue';
    import Footer from '../Footer.vue';
    import LatestPost from '../LatestPost.vue';
    import NewsList from '../NewsList.vue';

    const posts = ref ([
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
      date: new Date('2022-12-30')
    },
    {
      id: 3,
      title: 'Low Cost Latest Invented Interior Designing Ideas',
      description: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице',
      imageUrl: 'src/assets/img/latest_post.png',
      date: new Date('2022-12-26')
    },

  ])

    const latestPost = computed(() =>  posts.value.slice(-1)[0]); //Метод slice(startIndex, endIndex) создает новую копию части исходного массива, начиная с индекса startIndex и заканчивая индексом endIndex (не включительно). Если startIndex отрицательный, он отсчитывается с конца массива.Здесь slice(-1) берет последний элемент массива, а [0] извлекает первый (и единственный) элемент из результирующего массива. 

     const newsItems = [
    {
      id: 1,
      title: 'Дизайн кухни',
      imageUrl: 'src/assets/img/blog1.png',
      description: 'Создадим лучший макет перепланировки', 
      date: new Date('2022-12-26'),
    },
    {
      id: 2,
      title: 'Дизайн дома',
      imageUrl: 'src/assets/img/blog2.png',
      description: 'Лучшие интерьерные идеи по низкой цене',
      date: new Date('2022-12-22'),
    },
    {
      id: 3,
      title: 'Дизайн интерьера',
      description: 'Лучшие интерьерные решения для офисов',
      date: new Date('2022-12-25'),
      imageUrl: 'src/assets/img/blog3.png'
    },
    {
      id: 4,
      title: 'Дизайн кухни',
      imageUrl: 'src/assets/img/blog1.png',
      description: 'Создадим лучший макет перепланировки', 
      date: new Date('2022-12-26'),
    },
    {
      id: 5,
      title: 'Дизайн дома',
      imageUrl: 'src/assets/img/blog2.png',
      description: 'Лучшие интерьерные идеи по низкой цене',
      date: new Date('2022-12-22'),
    },
    {
      id: 6,
      title: 'Дизайн интерьера',
      imageUrl: 'src/assets/img/blog6.png',
      description: 'Лучшие интерьерные решения для офисов',
      date: new Date('2022-12-25'),
    },
  ]

</script>

<template>
    <div>
        <Header />
        <main>
            <BlogBannerArticlesNews />
            <LatestPost
                v-if="latestPost"
                :title="latestPost.title"
                :description="latestPost.description"
                :imageUrl="latestPost.imageUrl"
                :date="latestPost.date"
          />
            <NewsList :newsItems="newsItems" />        
        </main>

        <Footer/>
    </div>
</template>
<style>
</style>