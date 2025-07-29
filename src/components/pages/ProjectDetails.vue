<script setup>
import { ref } from "vue";
import Header from "../Header.vue";
import BannerComp from "../BannerComp.vue";
import ProjectDetailsItem from "../ProjectDetailsItem.vue";
import Footer from "../Footer.vue";
</script>
<template>
  <Header />
  <BannerComp imageUrl="/public/PrDetailsBanner.jpeg" />
  <main><ProjectDetailsItem /></main>
  <Footer />
</template>
