<template>
  <div class="wrapper">
    <Header :links="links" />
    <div class="container">  
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "About",
          url: "/about",
        },
        {
          title: "Cars",
          url: "/cars",
        },
      ],
    };
  },
};
</script>

<style>
</style>
