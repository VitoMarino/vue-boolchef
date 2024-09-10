<script>
import EndFooter from "./Footer/EndFooter.vue";
import FooterLinks from "./Footer/FooterLinks.vue";

export default {
  name: "",
  components: {
    FooterLinks,
    EndFooter,
  },
};
</script>

<template>
  <footer>
    <section class="footer-container">
      <FooterLinks />
      <EndFooter />
    </section>
  </footer>
</template>

<style scoped>
footer {
  background-color: #182427;
  .footer-container {
    max-width: 1400px;
  }
}
</style>
