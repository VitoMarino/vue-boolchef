<script>
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import FooterLinks from "./components/icons/FooterLinks.vue";
import HomePage from "./components/HomePage.vue";

export default {
  name: "",
  components: {
    MainFooter,
    MainHeader,
    FooterLinks,
    HomePage,
  },
};
</script>

<template>
  <MainHeader />
  <HomePage />
  <FooterLinks />
  <MainFooter />
</template>

<style></style>
