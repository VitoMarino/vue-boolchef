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
        <span>{{ chef.description_of_dishes }}</span>
       
        <span class="column"
          >   <strong >Media voti</strong>  
           <p v-if=" Number(chef.average_vote).toFixed() / 2   == 5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>
            <p v-else-if="Number(chef.average_vote).toFixed() / 2 == 4.5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </p>
            <p v-else-if="Number(chef.average_vote).toFixed() / 2 == 4" class="stars"
              ><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>
            <p v-else-if="Number(chef.average_vote).toFixed() / 2 == 3.5" class="stars"
              ><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star-half"></i>
            </p>
            <p v-else-if="Number(chef.average_vote).toFixed() / 2 == 3" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>

            <p v-else-if="Number(chef.average_vote).toFixed() / 2 == 2.5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </p>
            <p v-else-if="Number(chef.average_vote).toFixed() / 2 == 2" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>
            <p v-else-if="Number(chef.average_vote).toFixed() / 2 == 1.5" class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </p>
            <p v-else-if="Number(chef.average_vote).toFixed() / 2 == 1" class="stars">
              <i class="fa-solid fa-star"></i>
            </p>
            <p v-else="Number(chef.average_vote).toFixed() / 2 == 0.5" class="stars">
              <i class="fa-solid fa-star-half"></i>
            </p>
        
        </span>
      <span class="column"><strong>Numero recensioni</strong>{{ chef.reviews.length }}</span>
  <span class="column">
    Hai gia provato questo chef? 
    <RouterLink  :to="{name:'reviews', params:{ id: chef.id }}"><button class="review-button">Scrivi una recensione</button></RouterLink>
  </span>
    <span class="column">
    Contatta lo chef
    <RouterLink  :to="{name:'message', params:{ id: chef.id }}"><button class="message-button"> Contatta lo chef</button></RouterLink>
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
     justify-content: center;
    align-items: center;
    padding: 2rem;
    img{
      font-size: 0.5rem;
    }
    width: 35rem;
    
    span{
      margin-bottom: 1rem;
        border-bottom: 1px solid lightgray;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0rem;
    }
  }
}
button{
        
     
        padding: 0.3rem;
        border-radius: 1rem;
        background-color: goldenrod;
        border: 1px solid goldenrod;
        &:hover{
            background-color: white;
           
          
        }
    }
.button-review{
  width: 12rem;
}
.column{
  display: flex;
  flex-direction: column;
  button{
    margin: 1rem;
  }
}

</style>