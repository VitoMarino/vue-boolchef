<script>
export default {
  data() {
    return {
      recensioni: [
        {
          id: 1,
          title: "Ristorante Da Mario",
          author: "Giovanni Rossi",
          rating: 10,
          description:
            "Ottimo servizio e piatti deliziosi. Lo consiglio vivamente!",
        },
        {
          id: 2,
          title: "Trattoria La Nonna",
          author: "Sara Verdi",
          rating: 8,
          description: "Piatti tradizionali molto buoni, ma un po' caro.",
        },
        {
          id: 3,
          title: "Osteria Il Borgo",
          author: "Luca Bianchi",
          rating: 6,
          description:
            "Ambiente accogliente ma la qualità del cibo potrebbe migliorare.",
        },
        {
          id: 4,
          title: "Pizzeria Bella Napoli",
          author: "Anna Marchi",
          rating: 10,
          description:
            "La migliore pizza che abbia mai mangiato fuori da Napoli!",
        },
        {
          id: 5,
          title: "Ristorante Al Mare",
          author: "Marco Bruni",
          rating: 8,
          description:
            "Pesce fresco e vista mare spettacolare. Un po' lento il servizio.",
        },
        {
          id: 6,
          title: "Bistrot Parisienne",
          author: "Elena Neri",
          rating: 6,
          description:
            "Atmosfera chic, ma i piatti non mi hanno impressionato.",
        },
        {
          id: 7,
          title: "Steakhouse Grigliata Perfetta",
          author: "Paolo Bianchi",
          rating: 10,
          description: "Carne cotta alla perfezione, tornerò sicuramente!",
        },
        {
          id: 8,
          title: "Sushi Bar Tokyo",
          author: "Laura Gatti",
          rating: 8,
          description:
            "Sushi fresco e ben preparato. Prezzo nella media per un all-you-can-eat.",
        },
        {
          id: 9,
          title: "Gelateria Dolce Vita",
          author: "Francesco Ferri",
          rating: 10,
          description:
            "Gelato artigianale fantastico, soprattutto il pistacchio!",
        },
        {
          id: 10,
          title: "Caffè Roma",
          author: "Maria De Luca",
          rating: 7,
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
        this.$refs.scrollable.scrollBy({ left: 200, behavior: "smooth" });
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
    <div class="row top-review">
      <div class="col-lg-8 col-md-10">
        <div class="text">
          <h3>Più di 45500 ospiti hanno già goduto dell'esperienza</h3>
        </div>
        <div class="punteggio">
          <h1>5.00</h1>
          <p>Punteggio medio basato su 9349 recensioni</p>
        </div>
      </div>
    </div>

    <hr class="color" />

    <div class="reviews">
      <a class="prev" @click="prevReview">
        <i class="fa-solid fa-angle-left"></i>
      </a>

      <div class="review-container col-lg-8 col-md-6" ref="scrollable">
        <div v-for="recensione in recensioni" class="card single-review">
          <div class="card-body">
            {{ recensione.title }}
            <span>{{ recensione.description }}</span>
            <span>{{ recensione.author }}</span>

            <span v-if="recensione.rating / 2 == 5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="recensione.rating / 2 == 4.5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </span>
            <span v-else-if="recensione.rating / 2 == 4" class="stars"
              ><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="recensione.rating / 2 == 3.5" class="stars"
              ><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star-half"></i>
            </span>
            <span v-else-if="recensione.rating / 2 == 3" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>

            <span v-else-if="recensione.rating / 2 == 2.5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </span>
            <span v-else-if="recensione.rating / 2 == 2" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="recensione.rating / 2 == 1.5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </span>
            <span v-else-if="recensione.rating / 2 == 1" class="stars">
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else="recensione.rating / 2 == 0.5" class="stars">
              <i class="fa-solid fa-star-half"></i>
            </span>
          </div>
        </div>
      </div>

      <a class="next" @click="nextReview">
        <i class="fa-solid fa-angle-right"></i>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 3rem;
}
.reviews {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.review-container {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 70vw;
  flex-wrap: nowrap;
  margin-bottom: 2rem;
  .single-review {
    display: flex;
    flex-direction: column;
    height: 15rem;
    width: 100%;
    min-width: 13rem;
    margin-left: 0.5rem;
    .card-body {
      display: flex;
      flex-direction: column;
      span {
        margin-top: 1rem;
      }
      .stars {
        color: gold;
      }
    }
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

.next {
  font-size: 3rem;
  color: gray;
  &:hover {
    color: black;
  }
}
.prev {
  font-size: 3rem;
  color: gray;
  &:hover {
    color: black;
  }
}

@media (max-width: 767px) {
  .top-review {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .reviews {
    width: 100%;
  }
  .review-container {
    display: flex;
    justify-content: center;
  }
}
</style>
