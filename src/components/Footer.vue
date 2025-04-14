<script setup>
/*import { useRouter } from 'vue-router'; // Используем роутер для навигационных ссылок

const router = useRouter();

const navigateToHome = () => router.push({ path: '/' }); // Переход на домашнюю страницу
const navigateToProject = () => router.push({ path: '/project' }); // Переход на страницу проекта
const navigateToBlog = () => router.push({ path: '/blog' }); // Переход на страницу блога*/
</script>

<template>
  <nav class="footer">
    <div class="footer-wrapper">
      <div class="logo">
        <div class="logo-nav">
          <a href="#" @click.prevent="navigateToHome">
            <img class="logo-img" src="/src/assets/img/logo.png" alt="logo">
            <span class="logo-text h1-text">Interno</span>
          </a>
        </div>
        <div class="icons">
          <a href="https://twitter.com"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://linkedin.com"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      <div class="pages">
        <h1 class="blog-card-text">Страницы</h1>
        <ul class="nav-footer">
          <li class="nav-item nav-item-footer"><a href="#" @click.prevent="navigateToHome" class="nav-link">Домой</a></li>
          <li class="nav-item nav-item-footer"><a href="#" @click.prevent="navigateToProject" class="nav-link">Проект</a></li>
          <li class="nav-item nav-item-footer"><a href="#" @click.prevent="navigateToBlog" class="nav-link">Блог</a></li>
        </ul>
      </div>

      <div class="contacts">
        <h1 class="blog-card-text">Контакты</h1>
        <ul class="nav-footer">
          <li class="nav-item nav-item-footer nav-link nav-link-footer">55 East Birchwood Ave. <br>Brooklyn, New York 11201</li>
          <li class="nav-item nav-item-footer nav-link nav-link-footer">contact@interno.com</li>
          <li class="nav-item nav-item-footer nav-link nav-link-footer">(123) 456 - 7890</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Стили для футера */
</style>