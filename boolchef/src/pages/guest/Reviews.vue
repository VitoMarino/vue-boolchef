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
      chefs:[]
    };
  },
  methods: {
    postMessage(id){
        axios
        .post("http://127.0.0.1:8000/api/reviews", {
            review_title: this.review_title,
            review: this.review,
            user_name: this.user_name,
            email: this.email,
            chef_id: id,
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
   <main>
    <section>
        <h1>Scrivi la tua recensione</h1>
   <form @submit.prevent="postMessage" class="form-group card">
    <!-- Altri campi del messaggio -->
    
    <input type="hidden" name="chef_id" value="{{ $chef->id }}"> <!-- Campo nascosto con l'ID dello chef -->

    <label for="review_title">Titolo:</label>
    <input type="text" name="review_title" id="review_title" v-model="review_title" required class="form-control">

    <label for="user_name">Nome da presentare:</label>
    <input type="text" name="user_name" id="user_name" v-model="user_name" required class="form-control">

    <label for="email">Email per la risposta:</label>
    <input type="text" name="email" id="email" v-model="email" required class="form-control">

    <label for="review">Recensione</label>
    <textarea name="review" id="review" v-model="review" required class="form-control"></textarea>
    



    <button type="submit">Invia Recensione</button>
</form>
</section>
</main>

</template>


<style lang="scss" scoped>

section{
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
   form{
    padding: 4rem;
    margin: 6rem;
    width: 80rem;
    input{
        margin-bottom: 0.6rem;
    }
    button{
        margin-top: 1rem;
        width:10rem;
        padding: 0.3rem;
        border-radius: 1rem;
        background-color: goldenrod;
        border: 1px solid goldenrod;
        &:hover{
            background-color: white;
           
            width: 11rem;
        }
    }
   }
    
}



</style>