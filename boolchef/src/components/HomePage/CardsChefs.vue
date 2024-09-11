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
        this.indexScroll = this.Chefs.length - 2;
        console.log(this.indexScroll);
      }
    },
    scrollRight() {
      this.indexScroll++;
      if (this.indexScroll < this.Chefs.length - 2) {
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
  <h1>i nostri chef</h1>
  <a @click="scrollLeft()" class="left"> s</a>
  <a @click="scrollRight()" class="right"> > </a>
  <div class="chefs-container" ref="scrollable">
    <div v-for="chef in Chefs" class="single-chef">
      {{ chef.nome }}
      {{ chef.cognome }}
      {{ chef.specializazione }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.chefs-container {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  .single-chef {
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 100%;
    min-width: 10rem;
  }
}
.left {
  display: flex;
  position: absolute;
  top: 30;
  right: 60rem;
}
</style>
