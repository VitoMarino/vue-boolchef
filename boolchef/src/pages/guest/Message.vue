<script>
import axios from "axios";

export default {
  data() {
    return {
      text_mes: '',
      email_customer: '',
      chef_id: null,
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {}; // Resetta eventuali errori precedenti

      // Verifica che il messaggio abbia una lunghezza tra 5 e 500 caratteri
      if (!this.text_mes) {
        this.errors.text_mes = "Il messaggio è richiesto.";
      } else if (this.text_mes.length < 5) {
        this.errors.text_mes = "Il messaggio deve contenere almeno 5 caratteri.";
      } else if (this.text_mes.length > 500) {
        this.errors.text_mes = "Il messaggio non può superare i 500 caratteri.";
      }

      // Verifica che l'email sia valida e non superi i 50 caratteri
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email_customer) {
        this.errors.email_customer = "L'email è richiesta.";
      } else if (!emailRegex.test(this.email_customer)) {
        this.errors.email_customer = "L'email non è valida.";
      } else if (this.email_customer.length > 50) {
        this.errors.email_customer = "L'email non può superare i 50 caratteri.";
      }

      // Ritorna true se non ci sono errori
      return Object.keys(this.errors).length === 0;
    },

    // Funzione per inviare il messaggio
    postMessage() {
      // Esegui la validazione
      if (!this.validateForm()) {
        return; // Ferma l'invio se la validazione fallisce
      }

      axios
        .post("http://127.0.0.1:8000/api/messages", {
          text_mes: this.text_mes,
          email_customer: this.email_customer,
          chef_id: this.chef_id,
        })
        .then((response) => {
          console.log(response.data.results);
          const MessageDiv = document.createElement("div");
          const LastButton = document.getElementById("last-button");
          const ContainerConfirm = document.getElementById("confirm");
          const NotConfirmed = document.getElementById("not-confirm");

          ContainerConfirm.classList.add("confirm");
          const Confirm = document.createTextNode("Messaggio inviato con successo");
          const MessageButton = document.getElementById("messagge-form");

          if (ContainerConfirm == null) {
            const createcontainer = document.createElement("div");
            const Container = document.getElementById("MessageValidator");
            createcontainer.classList.add("confirm");
            MessageDiv.appendChild(Confirm);
            createcontainer.appendChild(MessageDiv);
            createcontainer.setAttribute('id', 'confirm');
            Container.appendChild(createcontainer);

            if (NotConfirmed !== null) {
              NotConfirmed.remove();
              MessageButton.classList.add('not-active');
              LastButton.classList.remove('not-visible');
            }
          } else {
            MessageDiv.appendChild(Confirm);
            ContainerConfirm.appendChild(MessageDiv);

            if (NotConfirmed !== null) {
              MessageButton.classList.add('not-active');
              LastButton.classList.remove('not-visible');
              NotConfirmed.remove();
            }
          }
        })
        .catch((error) => {
          console.log(error);
          const MessageDiv = document.createElement("div");
          const NotConfirmed = document.getElementById("not-confirm");
          const Confirm = document.createTextNode("Errore Messaggio non inviato");

          NotConfirmed.classList.add("not-confirmed");
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
      Contatta lo Chef
    </h1>

    <section>

      <form @submit.prevent="postMessage" id="messagge-form" novalidate>
        <!-- Altri campi del messaggio -->

        <input type="hidden" name="chef_id" :value="chef_id">

        <label for="email_customer">
          <strong>
            Inserisci la tua e-mail
          </strong>
        </label>
        <input type="text" name="email_customer" id="email_customer" v-model="email_customer" required class="form-control">
        <p v-if="errors.email_customer" style="color: red;">{{ errors.email_customer }}</p>

        <label for="review">
          <strong>
            Scrivi messaggio
          </strong>
        </label>
        <textarea name="text_mes" id="text_mes" v-model="text_mes" required class="form-control"></textarea>
        <p v-if="errors.text_mes" style="color: red;">{{ errors.text_mes }}</p>

        <button type="submit">
          Invia
        </button>
      </form>
      <div id="MessageValidator">
        <div  id="confirm"></div>
        <div  id="not-confirm"> </div>
      </div>
     <RouterLink class="last-button" :to="{name:'single-chef', params:{ id: chef_id }}" > <button id="last-button" class="not-visible">Torna indietro</button></RouterLink>
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
.not-visible{
  display: none;
}
.not-active{
  display: none;
}

.last-button{
    button{
  margin: 1rem;
      width: 10rem;
      padding: 0.3rem;
      border-radius: 1rem;
      background-color: goldenrod;
      border: 1px solid goldenrod;

      &:hover {
        background-color: white;

        width: 11rem;
      }}
}

.confirm{

  width: 40rem;
  padding: 3rem 1rem;
  display: flex;
  background-color: #98fa97;
  border-radius: 1rem;

}
.not-confirmed{

    width: 40rem;
  padding: 3rem 1rem;
  display: flex;
  background-color: #ff5252;
  border-radius: 1rem;
  margin-bottom: 2rem;
 
}

</style>