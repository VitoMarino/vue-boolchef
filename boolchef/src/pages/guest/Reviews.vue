<script>
import axios from "axios";
import { createElementBlock } from "vue";

export default {
  data() {
    return {
      review_title: '',
      review: '',
      user_name: '',
      email: '',
      chef_id: null,
      verifyMessage: null,
      verifyVote: null,
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
        

           const ReviewDiv= document.createElement("div");
  const ContainerConfirm = document.getElementById("confirmReview");
  const NotConfirmed = document.getElementById("not-confirmReview")
 const Confirm= document.createTextNode("Recensione inviata con successo");
  const ReviewButton= document.getElementById("review-form");
  const LastButton= document.getElementById("last-button");
if(ContainerConfirm == null){
    const createcontainer = document.createElement("div");
    const Container = document.getElementById("ReviewValidator")
  createcontainer.classList.add("confirm")
ReviewDiv.appendChild(Confirm);
  
  createcontainer.appendChild(ReviewDiv);

createcontainer.setAttribute('id','confirm')
Container.appendChild(createcontainer)
 if(NotConfirmed !== null){
NotConfirmed.remove()
ReviewButton.classList.add('not-active');
LastButton.classList.remove('review-not-visible');
}
}

else{
  






  ReviewDiv.appendChild(Confirm);
  
  ContainerConfirm.appendChild(ReviewDiv);

if(NotConfirmed !== null){
ReviewButton.classList.add('not-active');
LastButton.classList.remove('review-not-visible');
 NotConfirmed.remove()}}

        })
        .catch((error) => {
          console.log(error);
          const ReviewDiv= document.createElement("div");

  

  const NotConfirmed= document.getElementById("not-confirmReview");
    const Confirm= document.createTextNode("Errore Recensione non inviata");
     

        ReviewDiv.appendChild(Confirm);

  ReviewDiv.appendChild(Confirm);
  
  NotConfirmed.appendChild(ReviewDiv);




        });
    },
    postVote() {
      axios
        .post("http://127.0.0.1:8000/api/votes", {
          vote_id: this.vote_id,
          chef_id: this.chef_id,
        })
        .then((response) => {
          console.log(response.data.success);
          this.users = response.data.results;
          this.verifyVote= response.data.success;
    

//  --->  Creazione del div di conferma <----
 const VoteDiv= document.createElement("div");
 const LastButton = document.getElementById("last-button")
  const ContainerConfirm = document.getElementById("confirm");
  const NotConfirmed = document.getElementById("not-confirm")
 const Confirm= document.createTextNode("Voto inviato con successo");
  const VoteButton= document.getElementById("vote-form");
if(ContainerConfirm == null){
    const createcontainer = document.createElement("div");
    const Container = document.getElementById("VoteValidator")
  createcontainer.classList.add("confirm")
VoteDiv.appendChild(Confirm);
  
  createcontainer.appendChild(VoteDiv);

createcontainer.setAttribute('id','confirm')
Container.appendChild(createcontainer)
 if(NotConfirmed !== null){
NotConfirmed.remove()
VoteButton.classList.add('not-active');
LastButton.classList.remove('vote-not-visibile');
}
}

else{
  






  VoteDiv.appendChild(Confirm);
  
  ContainerConfirm.appendChild(VoteDiv);

if(NotConfirmed !== null){
VoteButton.classList.add('not-active');
LastButton.classList.remove('vote-not-visibile');
 NotConfirmed.remove()}}

  
        })
        //---> ERRORE NELLA LETTURA DELL'API <---
        .catch((error) => {
          console.log(error);
          
//  --->  Creazione del div di conferma <----
 const VoteDiv= document.createElement("div");

  

  const NotConfirmed= document.getElementById("not-confirm");
    const Confirm= document.createTextNode("Errore voto non inviato");
     

        VoteDiv.appendChild(Confirm);

  VoteDiv.appendChild(Confirm);
  
  NotConfirmed.appendChild(VoteDiv);



 ContainerConfirm.remove()
 
   


        });
      
  
  



    },

  
 ShowConfirmReview(){
  console.log('Per ora funziona dio bastardo')
  

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
      Invia Recensione e Voto
    </h1>

    <section>

        <form @submit.prevent="postVote" id="vote-form">
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

          <button type="submit" id="VoteButton">
            Invia voto
          </button>
        </form>
        <div id="VoteValidator" >
                <div class="confirm " id="confirm"></div>
               <div class="not-confirmed " id="not-confirm"></div> 
 
        </div> 
        
        <form @submit.prevent="postMessage" class="form-group" id="review-form">
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

<<<<<<< HEAD
          <button type="submit">
=======
          <button type="submit" @click="ShowConfirmReview">
>>>>>>> 56a879ac7c8761946a919577fe0fe40a003f2be9
            Invia Recensione
          </button>
        </form>
         <div id="ReviewValidator" >
                <div class="confirm " id="confirmReview"></div>
               <div class="not-confirmed " id="not-confirmReview"></div> 
 
        </div> 
        <button class="vote-not-visibile review-not-visible" id="last-button">Torna alla pagina dello chef</button>
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
.not-active{
  display: none;
}
.review-not-visible{
  display: none;
}
.vote-not-visibile{
  display: none;
}
@media(max-width:767px) {

  section {
    form {
      width: 20rem;
    }
  }

}
</style>