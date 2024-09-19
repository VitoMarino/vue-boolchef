<script>
import axios from "axios";

export default {
  data() {
    let specializations = this.$route.query.specialization || [];
    if (!Array.isArray(specializations)) {
      specializations = [specializations];
    }
    return {
      chefs: [],
      specializations: [],
      users: [],
      votes: [],
      reviews: [],
      selectedVote: null,
      selectedReview: null,
      selectedSpecializations: specializations,
    };
  },
  methods: {
    getChefs(specializationId) {
      this.$router.replace({
        name: 'search-chef',
        query: {
          specialization: this.selectedSpecializations,
          vote: this.selectedVote,
          reviews: this.selectedReview
        }
      });
      axios
        .get("http://127.0.0.1:8000/api/specialization/search", {
          params: {
            id: this.selectedSpecializations,
            vote: this.selectedVote || null,
            reviews: this.selectedReview || null,
          }, // Pass Filter array as 'id[]' in the query
        })
        .then((response) => {
          console.log(response.data.results);
          this.chefs = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getSpecializations() {
      axios
        .get("http://127.0.0.1:8000/api/specializations")
        .then((response) => {
          console.log(response.data.results);
          this.specializations = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getUser() {
      axios
        .get("http://127.0.0.1:8000/api/users")
        .then((response) => {
          console.log(response.data.results);
          this.users = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getVotes() {
      axios
        .get("http://127.0.0.1:8000/api/votes")
        .then((response) => {
          console.log(response.data.results);
          this.votes = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getReviews() {
      axios
        .get("http://127.0.0.1:8000/api/reviews")
        .then((response) => {
          console.log(response.data.results);
          this.reviews = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {

  },
  created() {
    this.getSpecializations();
    this.getUser();
    this.getVotes();
    this.getReviews();

    this.getChefs();
  },
  beforeRouteUpdate(to, from, next) {
    // Update filters based on new route parameters
    let specializations = to.query.specialization || [];
    if (!Array.isArray(specializations)) {
      specializations = [specializations];
    }
    this.selectedSpecializations = specializations;
    this.selectedVote = to.query.vote || null;
    this.selectedReview = to.query.reviews || null;
    // Do not call getChefs() here to avoid fetching data until the user clicks the button
    next();
  }
};
</script>

<template>

  <section class="chef-card-container">
    <h1 class="text-center">Trova lo Chef che fa per te</h1>
    <nav class="filters">
      <div class="btn-group" role="group">
        <span v-for="specialization in specializations" :key="specialization.id">
          <input type="checkbox" class="btn-check" autocomplete="off" :id="specialization.id" :value="specialization.id"
            v-model="selectedSpecializations" />
          <label :for="specialization.id" class="btn btn-outline-warning check-chef">
            {{ specialization.name }}
          </label>
        </span>
      </div>

      <div class="more-filters">
        <div>
          <label for="vote-filter">
            <strong>
              Filtra per voto medio
            </strong>
          </label>
          <select name="vote-filter" id="vote-filter" v-model="selectedVote" class="form-select w-25">
            <option value="" selected>Seleziona un voto</option>
            <!--Spiegazione:
              1. votes.map(v => Math.floor(v.id / 2)): Prima di fare il v-for, arrotondiamo ogni voto a un numero intero usando Math.floor().
              2. new Set(): Questo rimuove i duplicati dall'array. I Set in JavaScript permettono solo valori unici.
              3. [...new Set(...)]: Trasforma nuovamente il Set in un array, in modo che Vue possa eseguire il loop con v-for.-->
            <option v-for="vote in [...new Set(votes.map(v => Math.floor(v.id / 2)))]" :key="vote" :value="vote">
              {{ vote }}
            </option>

            <!--
            CODICE VECCHIO
            <option v-for="(vote, index) in votes" :key="vote.id" :value="vote.id" :id="'vote-filter-' + vote.id">
              <span v-if="index < votes.length - 1">
                {{  vote.id / 2}}</span>
              <span v-else>{{ vote.id / 2}} </span>
            </option>-->
          </select>
        </div>

        <div>
          <label for="reviews-filter">
            <strong>
              Filtra per numero di recensioni
            </strong>
          </label>

          <select name="reviews-filter" id="reviews-filter" v-model="selectedReview" class="form-select w-25">
            <option value="" selected>Seleziona un numero di recensioni</option>
            <!--Spiegazione:
              reviews.filter(review => review.id % 5 === 0): Usa il metodo filter() per selezionare solo gli elementi dell'array reviews il cui id è divisibile per 5, ovvero i multipli di 5. La condizione % 5 === 0 restituisce true per i numeri che sono multipli di 5.
              v-for: Il ciclo v-for genera solo le opzioni per i numeri di recensioni che soddisfano la condizione (essere multipli di 5).-->
            <option v-for="review in reviews.filter(review => review.id % 5 === 0)" :key="review.id" :value="review.id"
              :id="'review-filter-' + review.id">
              <span>
                {{ review.id }}
              </span>
            </option>
          </select>

          <button @click="getChefs" class="button-search">Filtra</button>
        </div>
      </div>
    </nav>




    <section v-if="chefs.length" class="chef-cards">

<<<<<<< HEAD
      <router-link v-for="chef in chefs" :to="{ name: 'single-chef', params: { id: chef.id } }" class="text-decoration-none"
        :key="chef.id">
=======
      <router-link  v-for="chef in chefs" :to="{name:'single-chef', params:{ id: chef.id }}" class="text-decoration-none" :key="chef.id">

            
      <div  class="card" v-if="chef.visibility == 1">
        <span class="img-container"><img :src="chef.photograph" :alt="chef.user.name"  v-if="chef.photograph !== null" class="photo "/>
          <img v-else src="../../assets/img/LOGO.png" class="logo"></span>
        <span>{{ chef.user.name }}</span>
        <span>{{ chef.user.lastname }}</span>
       <span > 
        <div v-for="specialization in chef.specializations" :key="specialization.id" >
           <p> {{ specialization.name }}</p>
          </div></span> 
        <span>{{ chef.description_of_dishes }}</span>
        <div>
          <strong>Media Voti:</strong>
>>>>>>> 3fba45127a8c7d8862c9a08ff2e5e311eb77f515


        <div class="card" v-if="chef.visibility == 1">
          <span><img :src="chef.photograph" :alt="chef.user.name" v-if="chef.photograph == null" />
            <img v-else src="../../assets/img/LOGO.png" class="logo"></span>
          <span>{{ chef.user.name }}</span>
          <span>{{ chef.user.lastname }}</span>
          <span>
            <div v-for="specialization in chef.specializations" :key="specialization.id">
              <p> {{ specialization.name }}</p>
            </div>
          </span>
          <span>{{ chef.description_of_dishes }}</span>
          <div>
            <strong>Media Voti:</strong>

            <span v-if="Number(chef.average_vote).toFixed() / 2 == 5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="Number(chef.average_vote).toFixed() / 2 == 4.5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </span>
            <span v-else-if="Number(chef.average_vote).toFixed() / 2 == 4" class="stars"><i
                class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="Number(chef.average_vote).toFixed() / 2 == 3.5" class="stars"><i
                class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star-half"></i>
            </span>
            <span v-else-if="Number(chef.average_vote).toFixed() / 2 == 3" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>

            <span v-else-if="Number(chef.average_vote).toFixed() / 2 == 2.5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </span>
            <span v-else-if="Number(chef.average_vote).toFixed() / 2 == 2" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="Number(chef.average_vote).toFixed() / 2 == 1.5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </span>
            <span v-else-if="Number(chef.average_vote).toFixed() / 2 == 1" class="stars">
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else="Number(chef.average_vote).toFixed() / 2 == 0.5" class="stars">
              <i class="fa-solid fa-star-half"></i>
            </span>
          </div>
          <div>
            <strong>Numero di Recensioni: </strong> {{ chef.reviews_count }}
          </div>
          <div>
            <span v-if="chef.is_sponsored" class="">Sponsorizzato</span>
          </div>
        </div>
      </router-link>
    </section>
    <section v-else>
      <h2>
        La Ricerca non ha prodotto risultati
      </h2>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.stars {
  color: gold;
}

.button-search {
  border-radius: 1rem;
  background-color: goldenrod;
  border: 0;
  width: 6rem;
  height: 2rem;
  margin-top: 1rem;

  &:hover {
    background-color: white;
    border: 1px solid goldenrod;

  }

}

.more-filters {
  background-color: #f4e3bd;
  width: 30rem;
  padding: 1rem;
  border-radius: 1rem;
  vertical-align: middle;

  div {
    display: flex;

    align-items: center;
    flex-direction: row;
    vertical-align: middle;
    margin: 1rem;

    select {
      margin-left: 0.5rem;
    }
  }
}

.chef-card-container {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .filters {
    flex-wrap: wrap;
    display: flex;

    div {
      display: flex;
      flex-wrap: wrap;
    }

    span {
      margin: .2rem;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.chef-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .card {
    width: 20rem;
    padding: 0rem 1rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: .5rem;

    span {
      padding-bottom: 1rem;
      border-bottom: 1px solid lightgray;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      p {
        font-size: 0.8rem;
        margin: 0.4rem;
      }
    }
  }

  .check-chef {
    border: goldenrod !important;
  }

}

@media(max-width:767px) {

  .chef-card-container {
    .chef-cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .filters {
    justify-content: center;
  }

}

.logo {
  width: 8rem;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
.img-container{
 display: flex;
  border: none !important;
  border-radius: 100%;
 max-width:10rem;
 max-height: 12rem;
  object-fit:cover;

  
}
.photo{
  border-radius: 100%;
  border: none;
}

</style>
