<script>
import axios from "axios";

export default {
  data() {
    return {
      chefs: [],
      specializations: [],
      users: [],
      Filter: [], // Should be an array since it's handling multiple filters (checkboxes)
    };
  },
  methods: {
    getChefs() {
      const filterString = this.Filter.join(","); // Join filter array into a comma-separated string

      axios
        .get("http://127.0.0.1:8000/api/specialization/search", {
          params: { id: this.Filter }, // Pass Filter array as 'id[]' in the query
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
          this.users = response.data.results;
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
          <label :for="specialization.id" class="btn btn-outline-warning check-chef">
            {{ specialization.name }}
          </label>
        </span>
        <button @click="getChefs" class="button-search">Click ME!!</button> <!-- Trigger the getChefs method -->
      </div>
    </nav>

    <section class="chef-cards" >
      <div  v-for="chef in chefs">

<div  class="card">
        <span><img :src="chef.photograph" :alt="chef.user.name" /></span>
        <span>{{ chef.user.name }}</span>
        <span>{{ chef.user.lastname }}</span>
        {{ chef.description_of_dishes }}
       
        <span v-for="index in chef.votes"
          >{{ index.vote }}
          <span>{{ index.label }}</span>
        </span>
      {{ chef.reviews.length }}


</div>

      </div>
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
