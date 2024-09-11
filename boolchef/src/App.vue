<script>
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";

import HomePage from "./components/HomePage.vue";

export default {
  name: "",
  components: {
    MainFooter,
    MainHeader,
    HomePage,
  },
};
</script>

<template>
  <MainHeader />
  <router-view></router-view>
  <HomePage/>
  <MainFooter/>
</template>

<style></style>
