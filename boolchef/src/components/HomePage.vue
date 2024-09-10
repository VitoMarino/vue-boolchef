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
    <WhoWeAre />
    <HowItWorks />
    <OurChefs />
    <Reviews />
    <sponsors />
  </main>
</template>

<style scoped></style>
