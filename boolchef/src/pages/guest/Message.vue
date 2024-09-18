<script>
import axios from "axios";

export default {
  data() {
    return {
      text_mes: '',
      email_customer: '',
      chef_id: null,
    };
  },
  methods: {
    postMessage() {
      axios
        .post("http://127.0.0.1:8000/api/messages", {
          text_mes: this.text_mes,
          email_customer: this.email_customer,
          chef_id: this.chef_id,
        })
        .then((response) => {
          console.log(response.data.results);
          this.users = response.data.results;

          
        })
        .catch((error) => {
          console.log(error);
        });
    }


  },
  created() {
    this.chef_id = this.$route.params.id;
  },

};
</script>

<template>
  <main>
    <h1 class="text-center">
      Contatta lo Chef
    </h1>

    <section>

      <form @submit.prevent="postMessage">
        <!-- Altri campi del messaggio -->

        <input type="hidden" name="chef_id" :value="chef_id">

        <label for="email_customer">
          <strong>
            Inserisci la tua e-mail
          </strong>
        </label>
        <input type="text" name="email_customer" id="email_customer" v-model="email_customer" required
          class="form-control">

        <label for="review">
          <strong>
            Scrivi messaggio
          </strong>
        </label>
        <textarea name="text_mes" id="text_mes" v-model="text_mes" required class="form-control"></textarea>

        <button type="submit">
          Invia
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

  form {
    padding: 4rem;
    margin: 6rem;
    width: 80rem;

    input {
      margin-bottom: 0.6rem;
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