<script setup>
    /*import { useRouter } from 'vue-router'; // Используем роутер для навигационных ссылок
    const router = useRouter();
    const navigateToHome = () => router.push({ path: '/' }); // Переход на домашнюю страницу
    const navigateToProject = () => router.push({ path: '/project' }); // Переход на страницу проекта
    const navigateToBlog = () => router.push({ path: '/blog' }); // Переход на страницу блога*/
</script>

<template>
  <nav class="header">
    <div class="header-container">
      <div class="logo-nav">
        <a href="#" @click.prevent="navigateToHome">
          <img class="logo-img" src="/src/assets/img/logo.png" alt="logo">
          <span class="logo-text h1-text">Interno</span>
        </a>
      </div>
      <div class="menubar">
        <ul class="nav">
          <li class="nav-item"><a href="#" @click.prevent="navigateToHome" class="nav-link">Домой</a></li>
          <li class="nav-item"><a href="#" @click.prevent="navigateToProject" class="nav-link">Проект</a></li>
          <li class="nav-item"><a href="#" @click.prevent="navigateToBlog" class="nav-link">Блог</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Стили для хедера */
</style>