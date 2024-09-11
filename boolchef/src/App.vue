<script>
<<<<<<< HEAD
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import HomePage from "./components/HomePage.vue";
=======
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
>>>>>>> c649797f79a2f70da67bb6c65a5bb097ec795f51

export default {
  name: "",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>

<style scoped>

</style>
