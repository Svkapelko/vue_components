<!--страница Project.vue-->
<script setup>
import Header from "../Header.vue";
import BannerComp from "../BannerComp.vue";
import ProjectGallery from "../ProjectGallery.vue";
import Footer from "../Footer.vue";
</script>

<template>
  <Header />
  <main>
    <BannerComp
      imageUrl="/public/bannerbedroom.jpeg"
      title="Статьи & новости"
      :showLinks="true"
    />
    <ProjectGallery />
  </main>
  <Footer />
</template>

<style></style>
