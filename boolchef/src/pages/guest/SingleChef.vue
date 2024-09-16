<script>
import axios from "axios";
import CardsChefs from "../../components/HomePage/CardsChefs.vue";
export default {
    components:{
        CardsChefs
    },
  data() {
    return {
      chefs: [],
     
    };
  },
  methods: {
    
   

    getChefs(id) {
      axios
        .get(`http://127.0.0.1:8000/api/chefs/${id}`,{
            params:{}
        })
        .then((response) => {
        
           console.log(response.data.results);
               this.chefs.push(response.data.results);
            
        })
        .catch((error) => {
          console.log(error);
        });
    },

 
},
  created() {
    this.getChefs(this.$route.params.id);
 
  },
}
</script>

<template>

<main>
  <section class="chef-container card-container">
<div v-for="chef in chefs" class="card">
 <span class="image-container"><img :src="chef.photograph" :alt="chef.user.name" /></span>
        <span>{{ chef.user.name }}</span>
        <span>{{ chef.user.lastname }}</span>
        {{ chef.description_of_dishes }}
       
        <span
          >{{ Number(chef.average_vote).toFixed() }}
        
        </span>
      {{ chef.reviews.length }}
  <span>
    Hai gia provato questo chef? Allora scrivi una recensione
    <RouterLink  :to="{name:'reviews', params:{ id: chef.id }}"><button>ddd</button></RouterLink>
  </span>
    <span>
    Contatta lo chef
    <RouterLink  :to="{name:'message', params:{ id: chef.id }}"><button>ddd</button></RouterLink>
  </span>
</div>
    </section>
</main>


</template>




<style lang="scss">

.chef-container{
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  div{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 2rem;
    img{
      font-size: 0.5rem;
    }
    width: 25rem;
    height: 30rem;
    span{
      margin-bottom: 1rem;
        border-bottom: 1px solid lightgray;
        width: 100%;
        display: flex;
        justify-content: center;
    }
  }
}



</style>