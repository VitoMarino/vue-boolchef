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
  display: flex;
  flex-direction: column;

  .footer-container {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }
}
</style>
