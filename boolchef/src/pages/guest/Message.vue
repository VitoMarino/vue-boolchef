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
           
          
          const MessageDiv= document.createElement("div");
 
 
            const LastButton = document.getElementById("last-button")
 
 
 const ContainerConfirm = document.getElementById("confirm");
 
 
  const NotConfirmed = document.getElementById("not-confirm")
 
   ContainerConfirm.classList.add("confirm")
  const Confirm= document.createTextNode("Messaggio inviato con successo");
  
 
 const MessageButton= document.getElementById("messagge-form");
if(ContainerConfirm == null){
    const createcontainer = document.createElement("div");
    const Container = document.getElementById("MessageValidator")
  createcontainer.classList.add("confirm")
MessageDiv.appendChild(Confirm);

  createcontainer.appendChild(MessageDiv);

createcontainer.setAttribute('id','confirm')
Container.appendChild(createcontainer)
 if(NotConfirmed !== null){
NotConfirmed.remove()
MessageButton.classList.add('not-active');
LastButton.classList.remove('not-visible');
}
}

else{
  






  MessageDiv.appendChild(Confirm);
  
  ContainerConfirm.appendChild(MessageDiv);

if(NotConfirmed !== null){
MessageButton.classList.add('not-active');
LastButton.classList.remove('not-visible');
 NotConfirmed.remove()}}
          
        })
        .catch((error) => {
          console.log(error);
          
  
 const MessageDiv= document.createElement("div");
  const NotConfirmed= document.getElementById("not-confirm");
    const Confirm= document.createTextNode("Errore Messaggio non inviato");
     
    NotConfirmed.classList.add("not-confirmed");

        MessageDiv.appendChild(Confirm);

  MessageDiv.appendChild(Confirm);
  
  NotConfirmed.appendChild(MessageDiv);
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
      Contatta lo <span>Chef</span> 
    </h1>

    <section>

      <form @submit.prevent="postMessage" id="messagge-form">
        <!-- Altri campi del messaggio -->

        <input type="hidden" name="chef_id" :value="chef_id">

        <label for="email_customer">
            Inserisci la tua e-mail
        </label>
        <input type="text" name="email_customer" id="email_customer" v-model="email_customer" required
          class="form-control">

        <label for="review">
            Scrivi messaggio
        </label>
        <textarea name="text_mes" id="text_mes" v-model="text_mes" required class="form-control"></textarea>

        <button class="submit-button" type="submit">
          Invia
        </button>
      </form>
      <div id="MessageValidator">
        <div  id="confirm"></div>
        <div  id="not-confirm"> </div>
      </div>
    <RouterLink class="last-button" :to="{name:'single-chef', params:{ id: chef_id }}" > <button id="last-button" class="not-visible submit-button">Torna indietro</button></RouterLink>
    </section>
  </main>
</template>

<style lang="scss" scoped>

span {
    font-weight: 700;
    color: #f0992e;
  }

  h1 {
    font-weight: 200;
  }

  .form-control {
  border: var(--bs-border-width) solid #f0992e !important;
}

label {
  font-weight: 200;
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

  form {
    padding: 4rem;
    
    width: 80rem;

    input {
      margin-bottom: 0.6rem;
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
.not-visible{
  display: none;
}
.not-active{
  display: none;
}

.last-button{
    margin: 2rem 0 2rem 0;
}

.confirm{

width: 100%;
padding: 1rem 1rem 1rem 1rem;
display: flex;
background-color: rgb(152, 250, 151, 0.7);
border: 3px solid rgb(152, 250, 151);
border-radius: 1rem;
margin: 2rem 0 2rem 0rem;

}
.not-confirmed{

width: 100%;
padding: 1rem 1rem 1rem 1rem;
display: flex;
background-color: rgb(255, 82, 82, 0.7);
border: 3px solid rgb(255, 82, 82);
border-radius: 15px;
}

</style>