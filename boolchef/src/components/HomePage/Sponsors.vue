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
      <h2>Si <span>fidano</span> di noi:</h2>
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
  background-color: #f39b2f;
  border-radius: 15px;
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
    h2 {
      font-weight: 200;
      padding-bottom: 1rem;
    }

    span {
      font-weight: 700;
      color: #5f340f;
    }
  }
  .sponsors {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    span {
      padding: 3rem;
      img {
        width: 10rem;
      }
    }
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
