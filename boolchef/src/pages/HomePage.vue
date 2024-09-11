<script>
import CardsChefs from "../components/HomePage/CardsChefs.vue";
import CardsInfo from "../components/HomePage/CardsInfo.vue";
import Jumbotron from "../components/HomePage/Jumbotron.vue";
import Reviews from "../components/HomePage/Reviews.vue";
import Sponsors from "../components/HomePage/Sponsors.vue";

export default {
  name: "",
  components: {
    Jumbotron,
    CardsInfo,
    CardsChefs,
    Reviews,
    Sponsors,
  },
};
</script>

<template>
  <section class="main-container">
    <main>
      <Jumbotron />
      <CardsInfo />
      <CardsChefs />
      <Reviews />
      <Sponsors />
    </main>
  </section>
</template>

<style scoped>
.main-container {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
