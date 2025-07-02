<!-- App.vue  -->
<script setup>

  import { ref, computed, onMounted } from 'vue';


  import { useRouter } from 'vue-router';

   const router = useRouter();

 /* onMounted(() => { //метод onMounted заменяет концепцию created в <script setup>
    router.push({ name: 'Dashboard'}) //Метод router.push выполняет переход на маршрут с именем Dashboard - при первом заходе на наше приложение у нас всегда будет открывать страница Dashboard
  })*/

  /*const page= ref('dashboard')

  const setPage = ()=> {
    page.value = window.location.hash.slice(1) || 'dashboard'; //  убираем с помощью slice # или / - то есть первый элемент, если hash пустой, ставим дефолт dashboard //
  }

  const clickMenu = () => {
    console.log(window.location.hash)
    window.addEventListener('hashchange', () => {
      setPage();
    })
  }

  onMounted(() => {
    const links = document.querySelectorAll('menu_link');

    links.forEach(element => {
      element.addEventListener('click', () => {
        e.preventDefault();
        history.pushState({}, '', element.href)
      })
    })
  })

  onMounted(() => { // Обновляем страницу при изменении хэша
    window.addEventListener('hashchange', setPage);
    setPage(); // Сразу обновляем при монтировании
  }); - это все первый вариант*/

  // Можно сделать иначе- второй вариант:
 /* const routes = {
    '/': Dashboard,
    '/about': AboutContent
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  }) */

  //import HelloWorld from './components/HelloWorld.vue'
  //import TheWelcome from './components/TheWelcome.vue'
  //import NewComponent from './components/NewComponent.vue';
  //import GalleryComp from './GalleryComp.vue';
  //import CardItem from './CardItem.vue';
  
  // import UserList from './components/Seminar_12/UserList.vue';

 // import { ref } from 'vue';
  //import { ref, onMounted } from 'vue';
  //import AddPaymentForm from './components/Lection_11/AddPaymentForm.vue';
  //import PaymentDisplay from './components/Lection_11/PaymentDisplay.vue'; 
  //import { usePaymentStore } from '@/stores/payment';

  // import AddCount from './components/AddCount.vue';
  //import ProductList from './components/ProductList.vue';
  //import ProductDetails from './components/ProductDetails.vue';

  // import MortgageCalculator from './components/MortgageCalculator.vue';
  //import Books from './components/Books.vue';
  //import ProductsComp from './components/ProductsComp.vue';
  //import Autentification from './components/Autentification.vue';
  //import CalcFunc from './components/CalcFunc.vue';

  import Header  from './components/Header.vue';
  //import FilterTags from './components/FilterTags.vue';
  //import ArticleList from './components/ArticleList.vue';

   //import Banner from './components/Banner.vue';
   //import ProjectGallery from './components/ProjectGallery.vue';
  // import BlogBannerArticlesNews from './components/BlogBannerArticlesNews.vue';
  //import BlogBannerFilteredArticles from './components/BlogBannerFilteredArticles.vue';
  import LatestPost from './components/LatestPost.vue';

  // import NewsList from './components/NewsList.vue';

  import Footer from './components/Footer.vue';

  
 // Список платежей
 //const paymentList = ref([]); //массив приходит с бэкэнда и потом мы туда будем добавлять данные

 /*const paymentStore = usePaymentStore();
 const paymentList = paymentStore.paymentList;
 const addNewPayment = paymentStore.addNewPayment;*/

// Инфо
 /*const infoText = ref('Your expenses');

const fetchData = () => {
    return [
        {
            date: '28.03.2020',
            category: 'Food',
            value: 169,
        },
        {
            date: '24.03.2020',
            category: 'Transport',
            value: 360,
        },
        {
            date: '24.03.2020',
            category: 'Food',
            value: 532,
        },
    ]
}*/

 // Вызвать функцию fetchData при монтировании компонента
 /*onMounted(() => {
    paymentList.value = fetchData();
  })*/

   /*onMounted(() => {
    usePaymentStore.setPaymentsListData(fetchData.value()); // Directly call the store's method
  });*/


/*const addNewPayment = (data) => {
  paymentList.value.push(data)
} */


  /*const products = ref([
        {
            id: 1,
            name: 'Смартфон 1',
            price: 10278.00,
            available: true,
            description: 'Описание смартфона 1',
            addionalInfo: ''
        },
        {
            id: 2,
            name: 'Смартфон 2',
            price: 15342.99,
            available: false,
            description: 'Описание смартфона 2',
            addionalInfo: 'Будет в наличии через 2 недели'
        },
        {
            id: 3,
            name: 'Смартфон 3',
            price: 25010.00,
            available: true,
            description: 'Описание смартфона 3',
            addionalInfo: ''
        }
    ])

    // Активный продукт
    const activeProduct = ref(null);

   // Режимы отображения товаров
    const isListVisible = ref(true); //По умолчанию показывается список товаров
    const isDetailVisible = ref(false); //По умолчанию детали товара скрыты

    // Функция для показа деталей товаров - когда нажимается кнопка просмотра деталей товара, компонент меняется на режим отображения конкретной карточки.
    const openDetails = (product) => {
      activeProduct.value = product;
      isListVisible.value = false;
      isDetailVisible.value = true;
    }

    //Функция для возврата обратно к списку 
    const backToList = () => {
      isListVisible.value = true;
      isDetailVisible.value = false;
    } */


 /* const newsItems = [
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
  ]*/



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

/*const getTitleByRouteName = routeName => {
  return {
    'Dashboard': 'Take a look on your payments and add more!',
    'About': 'Anything about our awesome application!',
    'Catalogue': 'You may choose anything you want!',
    'NotFound': 'Oops! Seems like we lost this page :('
  }[routeName] || ''; // Вернёт пустую строку, если ключ не найден
};

router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name);
  console.log(`${document.title}`)
});*/

</script>

<template>
  <div id="app">
    
      
  <!-- template для первого варианта
    <header>
      <nav @click="clickMenu">
        <a href="#dashboard" class="menu_link">Dashboard</a>
        <a href="#about" class="menu_link">About</a>
        <a href="#notfound" class="menu_link">Not found</a>
      </nav>      
    </header>
    <Dashboard v-if="page ==='dashboard'" />
    <AboutContent v-else-if="page === 'about'" />
    <NotFound v-else />
    --> 
    <!-- template для второго варианта-->
<!-- <a href="#/">Dashboard</a>
    <a href="#/about">About</a>
    <a href="#/non-existent-path">Broken Link</a>

     <component :is="currentView" /> 
     -->
     
 <!--   <p>
        <strong>Current route path: </strong> {{ $route.fullPath }}   
    </p> -->
<!-- <p class="current-page"> {{ $route.name }}</p>  -->
     <nav>
       <Router-link to="/">Dashboard</Router-link>
        <Router-link to="/about/content">About</Router-link> 
        <Router-link to="/catalogue">Catalogue</Router-link> 
        
      
        <!-- С помощью компонента <router-link> мы отображаем пользователю ссылку (по умолчанию идет рендер в тэг <a><a/>). Такая ссылка уже содержит в себе обработчик нажатия: вместо стандартного поведения будет запущена логика работы Vue Router. Свойство to определяет URL для перехода.-->
            
     </nav>
     <main>
        <Router-view /> <!-- отображает компонент, для которого совпадает маршрут определенный в роутере.
-->
     </main>
     
     
  

 <!--   <UserList /> -->
  
<!-- <PaymentDisplay :items="paymentList" :info="infoText" />
    <AddPaymentForm @addNewPayment="addNewPayment"/>  -->
    
 <!--   
    <AddCount />
    <AddCount />
    <AddCount /> -->

<!--    <ProductList 
      v-if="isListVisible"
      :products="products"
      :open-details="openDetails"
    />

    <ProductDetails 
      v-if="isDetailVisible && activeProduct"
      :product="activeProduct"
      :back-to-list="backToList"  
    />
-->

<!--    <MortgageCalculator />  -->

<!--    <Books /> -->
<!--   <ProductsComp />  -->
  <!--  <Autentification /> -->
  <!--  
    <Header /> 
    <Banner /> 
    <ProjectGallery /> -->
  <!--  <div class="blog-banner">
        <div class="blog-banner-wrapper"></div>
      </div> -->
  <!--    <BlogBannerArticlesNews />  -->
 <!--     <BlogBannerFilteredArticles /> -->
    
        
   <!--      <LatestPost
            v-if="latestPost"
            :title="latestPost.title"
            :description="latestPost.description"
            :imageUrl="latestPost.imageUrl"
            :date="latestPost.date"
          />  -->
      <!--    <NewsList :newsItems="newsItems" /> -->
         

 <!--     <div class="blog-wrapper blog-details-wrapper">
          <div class="blog-main">
            <ArticleList 
              :articles="articles" 
              :selectedTag="selectedTag"
              />
            <FilterTags 
              :articles="articles" 
              @update:selectedTag="updateSelectedTag"
            />            
          </div>
        </div> 
      </div> -->
    
    
   
    </div> 
</template>

<style>

 /*nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 15px;
 }

 nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

nav a:hover {
  color: #007bff;
}

a {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

a:hover {
  color: #007bff;
}

.current-page {
   padding: 20px;
}*/


  /*body {
    font-family:'Times New Roman', Times, serif;
  }

header {
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
