<script>
import axios from "axios";
import { array } from "i/lib/util";
export default {
  data() {
    return {
      chefs: [],
      specializations: [],
      users: [],
      Filter: [1],
    };
  },
  methods: {
    getChefs() {
      axios
        .get("http://127.0.0.1:8000/api/chefs", {
          params: {},
        })
        .then((response) => {
          console.log(response.data.results);
          this.chefs = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    },

    getSpecializations() {
      axios
        .get("http://127.0.0.1:8000/api/specializations", {
          params: {},
        })
        .then((response) => {
          console.log(response.data.results);
          this.specializations = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    },
    getUser() {
      axios
        .get("http://127.0.0.1:8000/api/users", {
          params: {},
        })
        .then((response) => {
          console.log(response.data.results);
          this.users = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    },
    
  },
  created() {
    this.getChefs();
    this.getSpecializations();
    this.getUser();
  },
};
</script>

<template>
  <section class="chef-card-container">
    <h1>I NOSTRI CHEF!!!!</h1>
    <nav class="filters">
      <div class="btn-group" role="group">
        <span v-for="specialization in specializations">
          <input
            type="checkbox"
            class="btn-check"
            autocomplete="off"
            :id="specialization.id"
            :name="specialization.name"
          />
          <label :for="specialization.id" class="btn btn-outline-primary">
            {{ specialization.name }}</label
          >
        </span>
      </div>

      <span class="more-filters">
        <h4>Più filtri</h4>
        <span> media voti <input type="number" id="votes" /></span>
        <span
          >numero recensioni
          <input type="number" id="reviews" v-model="GetFilteredReviews"
        /></span>
      </span>
    </nav>

    <section class="chef-cards" >
      <div  v-for="chef in chefs">

<div v-if="chef.id == Filter" class="card">
        <span><img :src="chef.photograph" :alt="chef.user.name" /></span>
        <span>{{ chef.user.name }}</span>
        <span>{{ chef.user.lastname }}</span>
        {{ chef.description_of_dishes }}
       
        <span v-for="index in chef.votes"
          >{{ index.vote }}
          <span>{{ index.label }}</span>
        </span>
        {{ chef.reviews.length }}</div>


<div v-else>
      </div>


      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
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
}
</style>
