<script>
import CardsChefs from "../components/HomePage/CardsChefs.vue";
import CardsInfo from "../components/HomePage/CardsInfo.vue";
import Jumbotron from "../components/HomePage/Jumbotron.vue";
import Reviews from "../components/HomePage/Reviews.vue";
import Sponsors from "../components/HomePage/Sponsors.vue";
import BecomeAChef from "../components/HomePage/BecomeAChef.vue";
import HomeSearchChef from "./guest/HomeSearchChef.vue";
export default {
  name: "",
  components: {
    Jumbotron,
    CardsInfo,
    CardsChefs,
    Reviews,
    Sponsors,
    BecomeAChef,
    HomeSearchChef,
  },
  
};
</script>

<template>
  <section class="main-container">
    <main>
      <Jumbotron />
      <CardsInfo />
      <CardsChefs />
      <BecomeAChef />
      <HomeSearchChef/>
      <Sponsors />
      <Reviews />
    </main>
  </section>
</template>

<style scoped>
.main-container {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
