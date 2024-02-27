<script>
import { RouterLink, RouterView } from 'vue-router';
import { initFlowbite } from "flowbite";
import HomeView from './views/HomeView.vue';
export default{
  components: { HomeView },
  created() {
    initFlowbite();
  },
}
</script>

<template>
  
  <header class="font-serif flex justify-center button_header px-2 py-2">
    <nav class="navbar inline-flex mb-3 space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
      <ul class="flex items-center">
        <li>
          <div class="flex items-center">
            <RouterLink to="/" class="ms-1 text-md font-medium text-gray-200 md:ms-2 dark:text-gray-400 dark:hover:text-white">
              <span class="flex items-center">
                <img src="./img/img_nav/home.png" alt="" style="width: 24px;">
                <span class="mx-1 font-bold hover:text-blue-500">Home</span>
              </span>
              
            </RouterLink>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <RouterLink to="/projects" class="ms-1 text-md font-medium text-gray-200 md:ms-2 dark:text-gray-400 dark:hover:text-white">
              <span class="flex items-center text-white">
                <img src="./img/img_nav/cartel.png" alt="" style="width: 24px;">
                <span class="mx-1 font-bold hover:text-blue-500">Projects</span>
              </span>
            </RouterLink>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <RouterLink to="/contacts" class="ms-1 text-md font-medium text-gray-200 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                <span class="flex items-center">
                  <img src="./img/img_nav/contacts.png" alt="" style="width: 24px;">
                  <span class="mx-1 font-bold hover:text-blue-500">Contacts</span>
                </span>
            </RouterLink>
          </div>
        </li>
      </ul>
      <div>
        <a href="/">
          <img src="./img/img_nav/computer.png" alt="" style="width: 48px;">
        </a>
      </div>
    </nav>

  </header>
 
  <main class="container_app font-serif text-white">
    <RouterView />
  </main>
</template>

<style scoped>
  .navbar{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
