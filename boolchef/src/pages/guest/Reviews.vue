<script>
import axios from "axios";

export default {
  data() {
    return {
      review_title: '',
      review: '',
      user_name: '',
      email: '',
      chef_id: null,

      vote_id: null,
    };
  },
  methods: {
    postMessage() {
      axios
        .post("http://127.0.0.1:8000/api/reviews", {
          review_title: this.review_title,
          review: this.review,
          user_name: this.user_name,
          email: this.email,
          chef_id: this.chef_id,
        })
        .then((response) => {
          console.log(response.data.results);
          this.users = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postVote() {
      axios
        .post("http://127.0.0.1:8000/api/votes", {
          vote_id: this.vote_id,
          chef_id: this.chef_id,
        })
        .then((response) => {
          console.log(response.data.results);
          this.users = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },


  },
  created() {
    this.chef_id = this.$route.params.id;
  },

};


</script>


<template>
  <main>

    <h1 class="text-center">
      Invia Recensione e Voto
    </h1>

    <section>

        <form @submit.prevent="postVote">
          <input type="hidden" name="chef_id" :value="chef_id">
          <select class="form-select form-select-sm" name="votes" id="votes" v-model="vote_id">
            <option value="0">
              Dai una valutazione
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button type="submit">
            Invia voto
          </button>
        </form>
        

        <form @submit.prevent="postMessage" class="form-group">
          <!-- Altri campi del messaggio -->

          <input type="hidden" name="chef_id" :value="chef_id">
          <label for="review_title">
            <strong>
              Titolo
            </strong>
          </label>
          <input type="text" name="review_title" id="review_title" v-model="review_title" required class="form-control">

          <label for="user_name">
            <strong>
              Inserisci il tuo nome e cognome
            </strong>
          </label>
          <input type="text" name="user_name" id="user_name" v-model="user_name" required class="form-control">

          <label for="email">
            <strong>
              Inserisci la tua e-mail
            </strong>
          </label>
          <input type="text" name="email" id="email" v-model="email" required class="form-control">

          <label for="review">
            <strong>
              Inserisci recensione
            </strong>
          </label>
          <textarea name="review" id="review" v-model="review" required class="form-control"></textarea>

          <button type="submit">
            Invia Recensione
          </button>
        </form>
    </section>
  </main>
</template>


<style lang="scss" scoped>
section {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin: 2rem;
  }

  form {

    width: 80rem;
    padding: 2rem;

    input {
      margin-bottom: 0.6rem;
    }

    select {
      margin-right: 1rem;
    }

    button {
      margin-top: 1rem;
      width: 10rem;
      padding: 0.3rem;
      border-radius: 1rem;
      background-color: goldenrod;
      border: 1px solid goldenrod;

      &:hover {
        background-color: white;

        width: 11rem;
      }
    }
  }

}

@media(max-width:767px) {

  section {
    form {
      width: 20rem;
    }
  }

}
</style>