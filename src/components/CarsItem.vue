<template>
  <main class="main">
    <div class="main__car">
      <div class="main__car-item">
         <img :src="getCar.img" alt="">
        <h2>{{ getCar.title }}</h2>
        <p>{{ getCar.descr }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import data from "@/data.js";

export default {
  data() {
    return {
      cars: data,
      id: null,
    };
  },
  created() {
    let id = this.$route.params.id;
    this.id = id;
  },
  computed: {
    getCar() {
      return this.cars.find((car) => car.id == this.id);
    },
  },
};
</script>

<style>
</style>