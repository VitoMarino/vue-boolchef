<script>
import axios from "axios";


export default {
  data() {
    return {
      specializations: [],
      specialization: this.$route.query.specialization,
      Filter: [],
      votes: [],
      reviews: [],
      selectedVote: null,
      selectedReview: null,
    }
  },
  methods: {
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

    getChefs() {
      const filterString = this.Filter.join(","); // Join filter array into a comma-separated string

      axios
        .get("http://127.0.0.1:8000/api/specialization/search", {
          params: {
            id: this.specialization,
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
  },
  watch: {
    '$route.query.specialization'(newSpecialization) {
      this.specialization = newSpecialization;
      this.getChefs();  // Aggiorna i cuochi quando cambia la specializzazione
    }
  },
  created() {
    this.getSpecializations();
  }
}
</script>

<template>
    <section class="chef-card-container animate pop">
      
      <div class="d-flex align-self-start">
        <h2 class="animate pop delay-1" >
          Scegli il tipo di <span class="my-color">cucina</span>
        </h2>
      </div>

    <form>
      <div class="btn-group d-flex flex-wrap" role="group">
        <span class="animate pop delay-2" v-for="specialization in specializations" :key="specialization.id" @change="getChefs()">
          <input type="checkbox" class="btn-check" autocomplete="off" :id="specialization.id" :value="specialization.id"
            v-model="Filter" />
          <router-link :to="{ name: 'search-chef', query: { specialization: [specialization.id] } }">
            <label :for="specialization.id" class="btn check-chef">
              {{ specialization.name }}
            </label>
          </router-link>
        </span>
      </div>
    </form>
  </section>
  <hr class="color">
</template>

<style lang="scss" scoped>

.my-color {
  color: #f39b2f;
  background-color: white;
  font-weight: 700
}

.chef-card-container {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 4rem;
}

h2{
  max-width: 1400px;
  padding-top: 1rem;
  font-weight: 200;
  margin-bottom: 3rem;
}

label.my_hover{
  &:hover{
    transform: scale(1.1);
  }
}

span {
  margin: 0.2rem;
  transition: background-color 0.3s, transform 0.3s;
  background-color: #f4e3bd;
  border-radius: 10px;

  label {

    &:hover {
      color: #f39b2f;
    }
  }

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
    }

hr.color {
  color: rgb(243, 155, 47);
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: 0;
  height: 4px;
  background-image: linear-gradient(to right, rgba(243, 155, 47, 0), rgba(243, 155, 47, 0.75), rgba(243, 155, 47, 0));
}

@media(max-width:767px) {

  h2{
  max-width: 1400px;
  font-size: 20px;
  padding-top: 1rem;
  font-weight: 200;
  margin-bottom: 3rem;
}
}

@media (max-width: 576px) {

  .chef-card-container {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 4rem;
}

  h2{
  max-width: 1400px;
  font-size: 20px;
  padding-top: 1rem;
  font-weight: 200;
  margin-bottom: 3rem;
}

span {
  margin: 0.2rem;
  transition: background-color 0.3s, transform 0.3s;
  background-color: #f4e3bd;
  border-radius: 10px;
  width: 30%;
}

}

</style>