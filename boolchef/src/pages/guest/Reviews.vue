<script>
import axios from "axios";

export default {
  data() {
    return {
      review_title: '',
      review: '',
      user_name: '',
      email: '',
      chef_id: 1,
    };
  },
  methods: {
    postMessage(){
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
  },
  created() {
    
  },

};


</script>


<template>
    <form @submit.prevent="postMessage">
    <!-- Altri campi del messaggio -->
    
    <input type="hidden" name="chef_id" value="{{ $chef->id }}"> <!-- Campo nascosto con l'ID dello chef -->

    <label for="review_title">Titolo:</label>
    <input type="text" name="review_title" id="review_title" v-model="review_title" required>

    <label for="user_name">Nome da presentare:</label>
    <input type="text" name="user_name" id="user_name" v-model="user_name" required>

    <label for="email">Email per la risposta:</label>
    <input type="text" name="email" id="email" v-model="email" required>

    <label for="review">Recensione</label>
    <textarea name="review" id="review" v-model="review" required></textarea>
    



    <button type="submit">Invia Recensione</button>
</form>



</template>


<style lang="scss" scoped></style>