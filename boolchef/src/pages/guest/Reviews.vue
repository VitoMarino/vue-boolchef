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
  ContainerConfirm.classList.add("confirm")
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
     NotConfirmed.classList.add("not-confirmed")

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
  ContainerConfirm.classList.add("confirm")
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
  NotConfirmed.classList.add("not-confirmed")
    const Confirm= document.createTextNode("Errore voto non inviato");
     

        VoteDiv.appendChild(Confirm);

  VoteDiv.appendChild(Confirm);
  
  NotConfirmed.appendChild(VoteDiv);



 ContainerConfirm.remove()
 
   


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

    <h1 class="text-center size">
      Invia <span>Recensione</span> e <span>Voto</span> 
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

          <button class="submit-button " type="submit" id="VoteButton">
            Invia voto
          </button>
        </form>
        <div id="VoteValidator" >
                <div id="confirm"></div>
               <div  id="not-confirm"></div> 
 
        </div> 
        
        <form @submit.prevent="postMessage" class="form-group" id="review-form">
          <!-- Altri campi del messaggio -->

          <input type="hidden" name="chef_id" :value="chef_id">
          <label class="my-weight" for="review_title">
              Titolo
          </label>
          <input type="text" name="review_title" id="review_title" v-model="review_title" required class="form-control form-margin">

          <label class="my-weight" for="user_name">
              Inserisci il tuo nome e cognome
          </label>
          <input type="text" name="user_name" id="user_name" v-model="user_name" required class="form-control form-margin">

          <label class="my-weight" for="email">
              Inserisci la tua e-mail
          </label>
          <input type="text" name="email" id="email" v-model="email" required class="form-control form-margin">

          <label class="my-weight" for="review">
              Inserisci recensione
          </label>
          <textarea name="review" id="review" v-model="review" required class="form-control form-margin"></textarea>

          <button class="submit-button" type="submit" @click="ShowConfirmReview">
            Invia Recensione
          </button>
        </form>
         <div id="ReviewValidator" >
                <div id="confirmReview"></div>
               <div id="not-confirmReview"></div> 
 
        </div> 
       <RouterLink class="last-button" :to="{name:'single-chef', params:{ id: chef_id }}"> <button class="vote-not-visibile review-not-visible" id="last-button">Torna alla pagina dello chef</button></RouterLink>
    </section>
  </main>
</template>


<style lang="scss" scoped>

.form-control, .form-select {
  border: var(--bs-border-width) solid #f0992e !important;
}

.form-margin {
  margin-bottom: 2rem;
}

.my-weight {
  font-weight: 200;
}

.size {
  font-weight: 200;

  span {
    font-weight: 700;
    color: #f0992e;
  }
}

.submit-button {

      margin-top: 1rem;
      padding: 5px 10px;
      font-size: 14px;
      color: black;
      background-color: #f4e3bd;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s;

      &:hover {
        background-color: #5f340f;
        transform: scale(1.1);
        color: white;
      }
    }

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
.last-button{
    button{
      margin-top: 1rem;
      margin-bottom: 2rem;
      padding: 5px 10px;
      font-size: 14px;
      color: black;
      background-color: #f4e3bd;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s;

      &:hover {
        background-color: #5f340f;
        transform: scale(1.1);
        color: white;
      }
    }
}

.confirm{

  width: 100%;
  padding: 1rem 0 1rem 4rem;
  display: flex;
  background-color: rgb(152, 250, 151, 0.7);
  border: 3px solid rgb(152, 250, 151);
  border-radius: 1rem;
  margin-bottom: 1rem;

}
.not-confirmed{

  width: 100%;
  padding: 1rem 0 1rem 4rem;
  display: flex;
  background-color: rgb(255, 82, 82, 0.7);
  border: 3px solid rgb(255, 82, 82);
  border-radius: 1rem;
  margin-bottom: 1rem;
}
</style>