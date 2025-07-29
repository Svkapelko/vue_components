<script setup>
import Header from "../Header.vue";
import BannerComp from "../BannerComp.vue";
import ProjectHome from "../ProjectHome.vue";
import Counter from "../Counter.vue";
import BlogHomePage from "../BlogHomePage.vue";
import Footer from "../Footer.vue";
</script>

<template>
  <Header />
  <main>
    <BannerComp
      imageUrl="/public/banner.png"
      banner-type="mainBanner"
      title="Пусть ваш дом будет уникальным"
      subtitle="Существует много вариаций Lorem Ipsum, которые можно использовать"
    />
    <ProjectHome />
    <Counter />
    <BlogHomePage />
  </main>
  <Footer />
</template>

<style scoped></style>
