<script>
export default {
  data() {
    return {
      recensioni: [
        {
          id: 1,
          title: "Ristorante Da Mario",
          author: "Giovanni Rossi",
          rating: 5,
          description:
            "Ottimo servizio e piatti deliziosi. Lo consiglio vivamente!",
        },
        {
          id: 2,
          title: "Trattoria La Nonna",
          author: "Sara Verdi",
          rating: 4,
          description: "Piatti tradizionali molto buoni, ma un po' caro.",
        },
        {
          id: 3,
          title: "Osteria Il Borgo",
          author: "Luca Bianchi",
          rating: 3,
          description:
            "Ambiente accogliente ma la qualità del cibo potrebbe migliorare.",
        },
        {
          id: 4,
          title: "Pizzeria Bella Napoli",
          author: "Anna Marchi",
          rating: 5,
          description:
            "La migliore pizza che abbia mai mangiato fuori da Napoli!",
        },
        {
          id: 5,
          title: "Ristorante Al Mare",
          author: "Marco Bruni",
          rating: 4,
          description:
            "Pesce fresco e vista mare spettacolare. Un po' lento il servizio.",
        },
        {
          id: 6,
          title: "Bistrot Parisienne",
          author: "Elena Neri",
          rating: 3,
          description:
            "Atmosfera chic, ma i piatti non mi hanno impressionato.",
        },
        {
          id: 7,
          title: "Steakhouse Grigliata Perfetta",
          author: "Paolo Bianchi",
          rating: 5,
          description: "Carne cotta alla perfezione, tornerò sicuramente!",
        },
        {
          id: 8,
          title: "Sushi Bar Tokyo",
          author: "Laura Gatti",
          rating: 4,
          description:
            "Sushi fresco e ben preparato. Prezzo nella media per un all-you-can-eat.",
        },
        {
          id: 9,
          title: "Gelateria Dolce Vita",
          author: "Francesco Ferri",
          rating: 5,
          description:
            "Gelato artigianale fantastico, soprattutto il pistacchio!",
        },
        {
          id: 10,
          title: "Caffè Roma",
          author: "Maria De Luca",
          rating: 4,
          description:
            "Buon caffè e pasticceria, ma il locale era un po' affollato.",
        },
      ],
      currentCard: 0,
    };
  },
  methods: {
    nextReview: function () {
      this.currentCard++;
      if (this.currentCard < this.recensioni.length - 1) {
        this.$refs.scrollable.scrollBy({ left: 478, behavior: "smooth" });
        console.log(this.currentCard);
      } else {
        this.$refs.scrollable.scrollBy({ left: -3500, behavior: "smooth" });
        this.currentCard = 0;
        console.log(this.currentCard);
      }
    },

    prevReview: function () {
      this.currentCard--;
      if (this.currentCard >= 0) {
        this.$refs.scrollable.scrollBy({ left: -478, behavior: "smooth" });
        console.log(this.currentCard);
      } else {
        this.$refs.scrollable.scrollBy({ left: 3500, behavior: "smooth" });
        this.currentCard = this.recensioni.length - 1;
        console.log(this.currentCard);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-4 red">
        <div class="text">
          <h3>Più di 45500 ospiti hanno già goduto dell'esperienza</h3>
        </div>
        <div class="punteggio">
          <h1>5.00</h1>
          <p>Punteggio medio basato su 9349 recensioni</p>
        </div>
      </div>
      <div class="col-8 green d-flex flex-wrap">
        <div class="chef">
          <h5>punteggio</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
        </div>
        <div class="pulizia">
          <h5>punteggio</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
        </div>
        <div class="qualita cibo">
          <h5>punteggio</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
        </div>
        <div class="presentazione">
          <h5>punteggio</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
        </div>
      </div>
    </div>

    <hr class="color" />

    <div class="row">
      <button class="next" @click="nextReview">></button>
      <button class="prev" @click="prevReview"><</button>
      <div class="col-8 d-flex review-container" ref="scrollable">
        <div v-for="recensione in recensioni" class="card single-review">
          <div class="card-body">
            {{ recensione.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.review-container {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 80%;
  flex-wrap: nowrap;
  .single-review {
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 100%;
    min-width: 30rem;
  }
}

.red {
  background-color: grey;
  height: 100px;
}

.green {
  background-color: grey;
  height: 200px;
}

.color {
  color: grey;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
