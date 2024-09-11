<script>
export default {
  name: "",
  data() {
    return {
      sponsors: [
        { title: "Boolflix", img: "/src/assets/img/boolflix-logo.png" },
        { title: "Boolzapp", img: "/src/assets/img/boolzapp-logo.png" },
        { title: "Booleaner", img: "/src/assets/img/booleaner-logo.png" },
        { title: "Boolean", img: "/src/assets/img/Boolean-logo.png" },
        { title: "Lyricsmus", img: "/src/assets/img/lyricsmus-logo.png" },
        {
          title: "Future of Esports",
          img: "/src/assets/img/future-of-esports-logo.png",
        },
        { title: "Bool-Comics", img: "/src/assets/img/bool-comics-logo.png" },
        { title: "ProjeXpert", img: "/src/assets/img/projexpert-logo.png" },
      ],
    };
  },
};
</script>

<template>
  <section class="sponsors-container">
    <div class="content">
      <h4>Sponsors:</h4>
    </div>

    <div class="sponsors">
      <span v-for="sponsor in sponsors">
        <img :src="sponsor.img" :alt="sponsor.title" />
      </span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sponsors-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: goldenrod;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      font-size: 2rem;
      padding-bottom: 1rem;
    }
    padding-bottom: 2rem;
  }
  .sponsors {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    span {
      padding: 3rem;
      img {
        width: 10rem;
        height: 3rem;
      }
    }
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .sponsors-container {
    .sponsors {
      span {
        padding: 2rem;
      }
    }
  }
}
</style>
