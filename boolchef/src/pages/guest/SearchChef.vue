<script>
import axios from "axios";

export default {
  data() {
    return {
      chefs: [],
      specializations: [],
      users: [],
      Filter: [], // Should be an array since it's handling multiple filters (checkboxes)
      votes: [],
      reviews: [],
      selectedVote: null,
      selectedReview: null,

    };
  },
  methods: {
    getChefs() {
      const filterString = this.Filter.join(","); // Join filter array into a comma-separated string

      axios
        .get("http://127.0.0.1:8000/api/specialization/search", {
          params: { 
            id: this.Filter,
            vote: this.selectedVote, 
            reviews: this.selectedReview
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
  created() {
    this.getChefs();
    this.getSpecializations();
    this.getUser();
    this.getVotes();
    this.getReviews();
  },

};
</script>

<template>
  <section class="chef-card-container">
    <h1>I NOSTRI CHEF!!!!</h1>
    <nav class="filters">
      <div class="btn-group" role="group">
        <span v-for="specialization in specializations" :key="specialization.id">
          <input
            type="checkbox"
            class="btn-check"
            autocomplete="off"
            :id="specialization.id"
            :value="specialization.id" 
            v-model="Filter" 
            
          />
          <label :for="specialization.id" class="btn btn-outline-warning check-chef" >
            {{ specialization.name }}
          </label>
        </span>
        <button @click="getChefs" class="button-search">Click ME!!</button> <!-- Trigger the getChefs method -->
      </div>
      <div>
        <label for="vote-filter">Filtra per il voto medio:</label>
        <select name="vote-filter" id="vote-filter" v-model="selectedVote">
          <option value="">Seleziona un voto</option selected>
          <option v-for="(vote,index) in votes" :key="vote.id" :value="vote.id" :id="'vote-filter-' + vote.id" >
            <span v-if="index < votes.length - 1">{{ vote.id }} o + </span>
            <span v-else>{{ vote.id }} </span>
          </option>
        </select>

        <label for="reviews-filter">Filtra per il numero di review:</label>
        <select name="reviews-filter" id="reviews-filter" v-model="selectedReview">
          <option value="" selected>Seleziona un numero di recensioni</option>
          <option v-for="(review,index) in reviews" :key="review.id" :value="review.id" :id="'review-filter-' + review.id">
            <span v-if="index < reviews.length - 1">{{ review.id }} o + </span>
            <span v-else> Max </span>
          </option>
        </select>

      </div>
    </nav>

    <section class="chef-cards" >
      <router-link  v-for="chef in chefs" :to="{name:'single-chef', params:{ id: chef.id }}" class="text-decoration-none">
            
<div  class="card">
        <span><img :src="chef.photograph" :alt="chef.user.name" /></span>
        <span>{{ chef.user.name }}</span>
        <span>{{ chef.user.lastname }}</span>
          <span v-for="specialization in chef.specializations" :key="specialization.id">
            {{ specialization.name }}
          </span>
        <span>{{ chef.description_of_dishes }}</span>
        <div>
          <strong>Media Voti:</strong> {{ Number(chef.average_vote).toFixed() }}
        </div>
        <div>
          <strong>Numero di Recensioni:</strong> {{ chef.reviews_count }}
        </div>



</div>

      </router-link>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.button-search{
border-radius: 1rem;
background-color: goldenrod;
border: 0;
width: 6rem;
height: 2rem;
margin-top: 1rem;
&:hover{
  background-color: white;
  border: 1px solid goldenrod;
  
}

}

.more-filters {
  width: 30rem;
  padding: 1rem;
  background-color: lightgray;
  border-radius: 1rem;
}

.chef-card-container {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;

  .filters {
    flex-wrap: wrap;
    display: flex;
    div {
      display: flex;
      flex-wrap: wrap;
    }
    span {
      margin: 1rem;
    }
  }
}

.chef-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  img {
    font-size: 0.5rem;
  }
  .card {
    width: 20rem;
    padding: 2rem;
    height: 30rem;
    display: flex;
    margin: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      padding-bottom: 1rem;
      border-bottom: 1px solid lightgray;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

 .check-chef{
  border: goldenrod !important;
 }


}
</style>
