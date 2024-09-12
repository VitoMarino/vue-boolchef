<script>
import axios from "axios";
export default {
  data() {
    return {
      chefs: [],
      specializations: [],
      users: [],
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
      <span v-for="specialization in specializations">
        {{ specialization.name }}
      </span>
    </nav>

    <section class="chef-cards">
      <div class="card" v-for="chef in chefs">
        <span><img :src="chef.photograph" :alt="chef.user.name" /></span>
        <span>{{ chef.user.name }}</span>
        <span>{{ chef.user.lastname }}</span>
        {{ chef.description_of_dishes }}
        <span v-for="index in chef.specializations"> {{ index.name }}</span>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.chef-card-container {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;

  .filters {
    flex-wrap: wrap;
    display: flex;
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
