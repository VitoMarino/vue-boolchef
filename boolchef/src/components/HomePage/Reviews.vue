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
      <div class="col-lg-8 my-margin">
        <div class="text">
          <h3 class="animate pop" >Più di <span>45500</span> ospiti hanno già goduto dell'esperienza</h3>
        </div>
        <div class="punteggio animate pop delay-1">
          <h1>5.00</h1>
          <p>Punteggio medio basato su 9349 recensioni</p>
        </div>
      </div>
      <div class="review-img animate pop delay-2">
        <img src="@/assets/img/piatto1.webp" alt="">
        <img class="position" src="@/assets/img/piatto2.webp" alt="">
      </div>
    </div>

    <hr class="color" />

    <div class="reviews animate pop delay-3">
      <a class="prev" @click="prevReview">
        <i class="fa-solid fa-angle-left"></i>
      </a>

      <div class="review-container col-lg-8 col-md-6" ref="scrollable">
        <div v-for="recensione in recensioni" class="card single-review">
          <div class="card-body">
            <span class="color-title">{{ recensione.title }}</span>
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


.top-review {
  justify-content: center;
  align-items: center;
}

.review-img {

  width: 30%;

  img {
    border-radius: 15px;
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    width: 40%;
    margin-left: 2rem
  }
}

.my-margin {
  margin: 5rem 0 1rem 0;
}

.text {

  span {
    font-weight: 700;
    color: #f39b2f
  }

  h3 {
    font-weight: 200;
  }
}

.punteggio {
  margin-top: 3rem;
  background-color: #f39b2f;
  border-radius: 15px;
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
  width: 50%;
  padding: 1rem;

  h1, p {
    margin-left: 1rem;
    color: white;
    font-weight: 200;
  }
}

.review-container {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  margin-bottom: 2rem;
  margin-bottom: 4rem;
  padding: 2rem 0 2rem 0;
  .single-review {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    height: 16rem;
    width: 100%;
    min-width: 13rem;
    margin-left: 1.5rem;
    overflow: hidden;
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);

    &:hover {
      transform: scale(1.10, 1.10);
      border: 2px solid #5f340f;

      .card-body {
        span{
          color: #5f340f;
        }

        .stars {
        color: gold;
      }
      }
    }

    .stars {
        color: gold;
      }


    .card-body {
      display: flex;
      flex-direction: column;
      height: 50%;
      span {
        margin-top: 1rem;
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
  color: rgb(243, 155, 47);
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: 0;
  height: 2px;
  background-image: linear-gradient(to right, rgba(243, 155, 47, 0), rgba(243, 155, 47, 0.75), rgba(243, 155, 47, 0));
}


.next {
  font-size: 3rem;
  color: gray;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  &:hover {
    color: #f39b2f;
    transform: scale(1.10, 1.10);
  }
}
.prev {
  font-size: 3rem;
  color: gray;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  &:hover {
    color: #f39b2f;
    transform: scale(1.10, 1.10);
  }
}

@media (max-width: 767px) {

  .review-img {
    width: 100%;

img {
  border-radius: 15px;
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
  width: 40%;
  margin-left: 2rem
}
}

  .punteggio {
  margin-top: 3rem;
  background-color: #f39b2f;
  border-radius: 15px;
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
  width: 37%;


  .text {
    h3 {
      font-size: 23px;
    }
  }


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
}

@media (max-width: 576px) {

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


.top-review {
  padding: 0rem 4rem;
  justify-content: center;
  align-items: center;
}

.review-img {

  width: 100%;

  img {
    border-radius: 15px;
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    width: 40%;
    margin-left: 2rem
  }
}

.my-margin {
  margin: 5rem 0 1rem 0;
}

.text {
  width: 70%;

  span {
    font-weight: 700;
    color: #f39b2f
  }

  h3 {
    font-weight: 200;
    font-size: 20px
  }
}

.punteggio {
  margin-top: 3rem;
  background-color: #f39b2f;
  border-radius: 15px;
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
  width: 60%;
  padding: 1rem;

  h1, p {
    margin-left: 1rem;
    color: white;
    font-weight: 200;
  }
}

.review-container {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  margin-bottom: 2rem;
  margin-bottom: 4rem;
  padding: 2rem 0 2rem 0;
  .single-review {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    height: 16rem;
    width: 100%;
    min-width: 13rem;
    margin-left: 1.5rem;
    overflow: hidden;
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);

    &:hover {
      transform: scale(1.10, 1.10);
      border: 2px solid #5f340f;

      .card-body {
        span{
          color: #5f340f;
        }

        .stars {
        color: gold;
      }
      }
    }

    .stars {
        color: gold;
      }


    .card-body {
      display: flex;
      flex-direction: column;
      height: 50%;
      span {
        margin-top: 1rem;
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
  color: rgb(243, 155, 47);
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: 0;
  height: 2px;
  background-image: linear-gradient(to right, rgba(243, 155, 47, 0), rgba(243, 155, 47, 0.75), rgba(243, 155, 47, 0));
}


.next {
  font-size: 3rem;
  color: gray;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  &:hover {
    color: #f39b2f;
    transform: scale(1.10, 1.10);
  }
}
.prev {
  font-size: 3rem;
  color: gray;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  &:hover {
    color: #f39b2f;
    transform: scale(1.10, 1.10);
  }
}
}
</style>
