<script>
import HowItWorks from "./HomePage/HowItWorks.vue";
import OurChefs from "./HomePage/OurChefs.vue";
import sponsors from "./HomePage/sponsors.vue";
import WhoWeAre from "./HomePage/WhoWeAre.vue";
import Reviews from "./HomePage/Reviews.vue";

export default {
  name: "",
  components: {
    HowItWorks,
    WhoWeAre,
    OurChefs,
    sponsors,
    Reviews,
  },
};
</script>

<template>
  <main>
    <section class="main-container">
      <WhoWeAre />
      <HowItWorks />
      <OurChefs />
      <Reviews />
      <sponsors />
    </section>
  </main>
</template>

<style scoped>
.main-container {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
