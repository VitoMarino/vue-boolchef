<script>
export default {
  data() {
    return {
      indexScroll: 0,
      Chefs: [
        {
          nome: "Massimo",
          cognome: "Bottura",
          specialità: "Cucina italiana contemporanea",
        },
        {
          nome: "Gordon",
          cognome: "Ramsay",
          specialità: "Cucina britannica e francese",
        },
        {
          nome: "Yannick",
          cognome: "Alléno",
          specialità: "Cucina francese moderna",
        },
        {
          nome: "Hélène",
          cognome: "Darroze",
          specialità: "Cucina francese e basca",
        },
        {
          nome: "Nobu",
          cognome: "Matsuhisa",
          specialità: "Cucina giapponese fusion",
        },
        { nome: "Alain", cognome: "Ducasse", specialità: "Cucina francese" },
        { nome: "Carlo", cognome: "Cracco", specialità: "Cucina italiana" },
        {
          nome: "René",
          cognome: "Redzepi",
          specialità: "Cucina nordica e molecolare",
        },
        { nome: "Anne-Sophie", cognome: "Pic", specialità: "Cucina francese" },
        {
          nome: "José",
          cognome: "Andrés",
          specialità: "Cucina spagnola e molecolare",
        },
      ],
    };
  },
  methods: {
    scrollLeft() {
      this.indexScroll--;
      if (this.indexScroll >= 0) {
        this.$refs.scrollable.scrollBy({ left: -478, behavior: "smooth" });
        console.log(this.indexScroll);
      } else {
        this.$refs.scrollable.scrollBy({ left: 3500, behavior: "smooth" });
        this.indexScroll = this.projects.length - 2;
        console.log(this.indexScroll);
      }
    },
    scrollRight() {
      this.indexScroll++;
      if (this.indexScroll < this.projects.length - 2) {
        this.$refs.scrollable.scrollBy({ left: 478, behavior: "smooth" });

        console.log(this.indexScroll);
      } else {
        this.$refs.scrollable.scrollBy({ left: -3500, behavior: "smooth" });
        this.indexScroll = 0;
        console.log(this.indexScroll);
      }
    },
  },
};
</script>

<template>
  <section>
    <p @click="scrollLeft()" class="left">></p>
    <div class="cards-container">
      <div v-for="chef in Chefs">
        <span>{{ chef.nome }}</span>
        <span> {{ chef.cognome }} </span>
        <span> {{ chef.specialità }} </span>
      </div>
    </div>
    <a @click="scrollRight()" class="right"> < </a>
  </section>
</template>

<style scoped>
.cards-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  div {
    width: 10rem;
    height: 20rem;
    margin: 10rem;
  }
}
</style>
