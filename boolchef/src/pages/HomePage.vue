<script>
import CardsChefs from '@/components/homepage/CardsChefs.vue';
import CardsInfo from '@/components/homepage/CardsInfo.vue';
import Jumbotron from '@/components/homepage/Jumbotron.vue'
import Reviews from '@/components/homepage/Reviews.vue';
import Sponsors from '@/components/homepage/Sponsors.vue';

export default {
  name: "",
  components: {
    Jumbotron,
    CardsInfo,
    CardsChefs,
    Reviews,
    Sponsors
  },
};
</script>

<template>
  <main>
    <section class="main-container">
      <Jumbotron/>
      <CardsInfo/>
      <CardsChefs/>
      <Reviews/>
      <Sponsors/>
    </section>
  </main>
</template>

<style scoped>
.main-container {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
