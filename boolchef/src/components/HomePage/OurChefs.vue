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

<<<<<<< HEAD
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
  <section class="Chefs">
    <h1>i nostri chef</h1>
    <a @click="scrollLeft()" class="left">
      <i class="fa-solid fa-angle-left"></i
    ></a>
    <a @click="scrollRight()" class="right">
      <i class="fa-solid fa-angle-right"></i>
    </a>
    <div class="chefs-container" ref="scrollable">
      <div v-for="chef in Chefs" class="single-chef">
        {{ chef.nome }}
        {{ chef.cognome }}
        {{ chef.specializazione }}
      </div>
    </div>
  </section>
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
    height: 25rem;

    min-width: 20rem;
    background-color: green;
    border: solid 1px black;
    margin-left: 0.4rem;
  }
}
.left {
  position: absolute;
  margin-top: 6rem;
  left: 4rem;
}
.right {
  position: absolute;
  right: 4rem;
  margin-top: 6rem;
}

a {
  text-decoration: none;
  font-size: 3rem;
  color: gray;
  &:hover {
    color: black;
  }
}

.Chefs {
  background-color: #f29219;
  padding: 4rem;
}
</style>
=======
<style scoped lang="scss"></style>
>>>>>>> 70334c67bfe4009761b88710bbcd1fde20919b4d
