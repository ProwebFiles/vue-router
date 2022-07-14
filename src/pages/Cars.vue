<template>
  <main class="main">
    <div class="main__car">
      <div class="main__car-item" v-for="car in cars" :key="car.id">
        <img :src="car.img" alt="" />
        <router-link :to="/cars/ + car.id">{{ car.title }}</router-link>
        <p>{{ car.descr }}</p>
        
      </div>
    </div>
  </main>
</template>

<script>
import data from '@/data.js';
export default {
  data() {
    return {
     cars: data
    };
  },
};
</script>

<style>
</style>