<script setup>

</script>

<template>
 <!-- <div class="header">
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
  </div> -->
<div class="header">
    <div class="header-wrapper">
      <div class="logo-nav">
        <router-link to="/">
          <img class="logo-img" src="/src/assets/img/logo.png" alt="logo">
          <span class="logo-text h1-text">Interno</span>
        </router-link>
      </div>
      <div class="menubar">
        <router-link to="/" class="nav-link">Домой</router-link>
        <router-link to="/project" class="nav-link">Проект</router-link>
        <router-link to="/blog" class="nav-link">Блог</router-link>       
      </div>
    </div>
  </div>
</template>

<style scoped>

  .header-wrapper {
	  display: flex;
    align-items:center;
    justify-content: space-between;
    margin: 53px 360px 53px 360px;
    width: 100%;
    max-width: 1200px;
  }

  .logo-nav {
    display: flex;
    align-items: center;
  }

  .logo-img {
    width: 34px;
    margin-right: 10px;
  }

  .h1-text {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: left;
}

  .logo-text {
    font-size: 40px; 
  }

  .menubar {
    display: flex;
    gap: 45px;
  }

  .nav-link {
    text-decoration: none;
    color: #212529;
    color: rgb(41, 47, 54);
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: center;
  } 

</style>