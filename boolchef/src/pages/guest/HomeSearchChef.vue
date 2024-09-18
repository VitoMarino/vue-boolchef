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
    methods:{
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
    created(){
      this.getSpecializations();
    }
}
</script>

<template>
  <section class="chef-card-container" >
    <form>
      <div class="btn-group" role="group">
        <span v-for="specialization in specializations" :key="specialization.id" @change="getChefs()">
          <input
          type="checkbox"
          class="btn-check"
          autocomplete="off"
          :id="specialization.id"
          :value="specialization.id" 
          v-model="Filter" 
          />
          <router-link :to="{ name: 'search-chef', query: { specialization: [specialization.id] }}">
          <label :for="specialization.id" class="btn btn-outline-warning check-chef">
            {{ specialization.name }}
          </label>
          </router-link>
        </span>
      </div>
    </form>
  </section>  
</template>

<style lang="scss" scoped>
.chef-card-container {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
}
</style>