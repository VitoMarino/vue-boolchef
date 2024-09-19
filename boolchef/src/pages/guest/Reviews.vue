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
      errors: {},
      voteError: null,
      
    };
  },
  methods: {
    
    
    postVote() {
      // Resetta eventuali errori precedenti
      this.voteError = null;

      // Validazione della select
      if (this.vote_id === "0" || this.vote_id === null) {
        // Se il voto non è valido, mostra un messaggio di errore
        this.voteError = "Per favore, seleziona un voto valido.";
        return; // Ferma l'esecuzione se la validazione fallisce
      }


      axios
      .post("http://127.0.0.1:8000/api/votes", {
        vote_id: this.vote_id,
        chef_id: this.chef_id,
      })
      .then((response) => {
        console.log(response.data.success);
        this.users = response.data.results;
        this.verifyVote = response.data.success;

        // Logica per la gestione del div di conferma
        const VoteDiv = document.createElement("div");
        const LastButton = document.getElementById("last-button");
        const ContainerConfirm = document.getElementById("confirm");
        ContainerConfirm.classList.add("confirm");
        const NotConfirmed = document.getElementById("not-confirm");
        const Confirm = document.createTextNode("Voto inviato con successo");
        const VoteButton = document.getElementById("vote-form");

        if (ContainerConfirm == null) {
          const createcontainer = document.createElement("div");
          const Container = document.getElementById("VoteValidator");
          createcontainer.classList.add("confirm");
          VoteDiv.appendChild(Confirm);
          createcontainer.appendChild(VoteDiv);

          createcontainer.setAttribute("id", "confirm");
          Container.appendChild(createcontainer);

          if (NotConfirmed !== null) {
            NotConfirmed.remove();
            VoteButton.classList.add("not-active");
            LastButton.classList.remove("vote-not-visibile");
          }
        } else {
          VoteDiv.appendChild(Confirm);
          ContainerConfirm.appendChild(VoteDiv);

          if (NotConfirmed !== null) {
            VoteButton.classList.add("not-active");
            LastButton.classList.remove("vote-not-visibile");
            NotConfirmed.remove();
          }
        }
      })
      .catch((error) => {
        console.log(error);

        const VoteDiv = document.createElement("div");
        const NotConfirmed = document.getElementById("not-confirm");
        NotConfirmed.classList.add("not-confirmed");
        const Confirm = document.createTextNode("Errore voto non inviato");

        VoteDiv.appendChild(Confirm);
        NotConfirmed.appendChild(VoteDiv);

        ContainerConfirm.remove();
      });

    },

    validateForm() {
      this.errors = {}; // Resetta gli errori

      // Titolo della recensione
      if (!this.review_title) {
        this.errors.review_title = "Il titolo della recensione è richiesto.";
      } else if (this.review_title.length > 50) {
        this.errors.review_title = "Il titolo non può superare i 50 caratteri.";
      }

      // Testo della recensione
      if (!this.review) {
        this.errors.review = "La recensione è richiesta.";
      }

      // Nome utente
      if (!this.user_name) {
        this.errors.user_name = "Il nome utente è richiesto.";
      } else if (this.user_name.length > 50) {
        this.errors.user_name = "Il nome utente non può superare i 50 caratteri.";
      }

      // Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Espressione regolare per validare email
      if (!this.email) {
          this.errors.email = "L'email è richiesta.";
      } else if (this.email.length > 50) {
          this.errors.email = "L'email non può superare i 50 caratteri.";
      } else if (!emailRegex.test(this.email)) {
          this.errors.email = "L'email non è valida.";
      }


      // Ritorna true se non ci sono errori
      return Object.keys(this.errors).length === 0;
    },

    // Funzione per gestire la sottomissione del form
    submitReview() {
      // Se la validazione lato client fallisce, non inviare i dati
      if (!this.validateForm()) {
        return;
      }

      // Esegui la richiesta POST solo se la validazione è corretta
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

          const ReviewDiv = document.createElement("div");
          const ContainerConfirm = document.getElementById("confirmReview");
          const NotConfirmed = document.getElementById("not-confirmReview")
          ContainerConfirm.classList.add("confirm")
          const Confirm = document.createTextNode("Recensione inviata con successo");
          const ReviewButton = document.getElementById("review-form");
          const LastButton = document.getElementById("last-button");
          if (ContainerConfirm == null) {
            const createcontainer = document.createElement("div");
            const Container = document.getElementById("ReviewValidator")
            createcontainer.classList.add("confirm")
            ReviewDiv.appendChild(Confirm);

            createcontainer.appendChild(ReviewDiv);

            createcontainer.setAttribute('id', 'confirm')
            Container.appendChild(createcontainer)
            if (NotConfirmed !== null) {
              NotConfirmed.remove()
              ReviewButton.classList.add('not-active');
              LastButton.classList.remove('review-not-visible');
            }
          }

          else {
            ReviewDiv.appendChild(Confirm);

            ContainerConfirm.appendChild(ReviewDiv);

            if (NotConfirmed !== null) {
              ReviewButton.classList.add('not-active');
              LastButton.classList.remove('review-not-visible');
              NotConfirmed.remove()
            }
          }

        })
        .catch((error) => {
          console.log(error);
          const ReviewDiv = document.createElement("div");

          const NotConfirmed = document.getElementById("not-confirmReview");
          const Confirm = document.createTextNode("Errore Recensione non inviata");
          NotConfirmed.classList.add("not-confirmed")

          ReviewDiv.appendChild(Confirm);

          ReviewDiv.appendChild(Confirm);

          NotConfirmed.appendChild(ReviewDiv);
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

        <form @submit.prevent="postVote" id="vote-form" novalidate>
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

          <p v-if="voteError" style="color: red;">{{ voteError }}</p>

          <button type="submit" id="VoteButton">
            Invia voto
          </button>
        </form>
        <div id="VoteValidator" >
                <div id="confirm"></div>
               <div  id="not-confirm"></div> 
 
        </div> 
        
        <form @submit.prevent="submitReview" class="form-group" id="review-form" novalidate>
          <!-- Altri campi del messaggio -->

          <input type="hidden" name="chef_id" :value="chef_id">
          <label for="review_title">
            <strong>
              Titolo
            </strong>
          </label>
          <input type="text" name="review_title" id="review_title" v-model="review_title" required class="form-control">
          <p v-if="errors.review_title" style="color: red;">{{ errors.review_title }}</p>

          <label for="user_name">
            <strong>
              Inserisci il tuo nome e cognome
            </strong>
          </label>
          <input type="text" name="user_name" id="user_name" v-model="user_name" required class="form-control">
          <p v-if="errors.user_name" style="color: red;">{{ errors.user_name }}</p>

          <label for="email">
            <strong>
              Inserisci la tua e-mail
            </strong>
          </label>
          <input type="text" name="email" id="email" v-model="email" required class="form-control">
          <p v-if="errors.email" style="color: red;">{{ errors.email }}</p>

          <label for="review">
            <strong>
              Inserisci recensione
            </strong>
          </label>
          <textarea name="review" id="review" v-model="review" required class="form-control"></textarea>
          <p v-if="errors.review" style="color: red;">{{ errors.review }}</p>

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

        <button type="submit" @click="ShowConfirmReview">
          Invia Recensione
        </button>
      </form>
      <div id="ReviewValidator">
        <div id="confirmReview"></div>
        <div id="not-confirmReview"></div>

      </div>
      <RouterLink class="last-button" :to="{ name: 'single-chef', params: { id: chef_id } }"> <button
          class="vote-not-visibile review-not-visible" id="last-button">Torna alla pagina dello chef</button>
      </RouterLink>
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

.not-active {
  display: none;
}

.review-not-visible {
  display: none;
}

.vote-not-visibile {
  display: none;
}

@media(max-width:767px) {

  section {
    form {
      width: 20rem;
    }
  }

}

.last-button {
  button {
    margin: 1rem;
    width: 15rem;
    padding: 0.3rem;
    border-radius: 1rem;
    background-color: goldenrod;
    border: 1px solid goldenrod;

    &:hover {
      background-color: white;

      width: 16rem;
    }
  }
}

.confirm {

  width: 40rem;
  padding: 3rem 1rem;
  display: flex;
  background-color: #98fa97;
  border-radius: 1rem;

}

.not-confirmed {

  width: 40rem;
  padding: 3rem 1rem;
  display: flex;
  background-color: #ff5252;
  border-radius: 1rem;
  margin-bottom: 2rem;
}
</style>