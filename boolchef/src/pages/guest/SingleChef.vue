<script>
import axios from "axios";
import CardsChefs from "../../components/HomePage/CardsChefs.vue";
export default {
  components: {
    CardsChefs
  },
  data() {
    return {
      chefs: [],
      response:null,
    };
  },
  methods: {



    getChefs(id) {
      axios
        .get(`http://127.0.0.1:8000/api/chefs/${id}`, {
          params: {}
        })
        .then((response) => {

          console.log(response.data.success);
          this.chefs.push(response.data.results);
          this.response = response.data.success
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
<div v-for="chef in chefs" v-if="response == true">

  <div v-if="chef.visibility == 1" class="card">
 <span class="image-container"><img :src="chef.photograph" :alt="chef.user.name"  v-if="chef.photograph !== null"/>
          <img v-else src="../../assets/img/LOGO.png" class="logo"></span>
          <div class="name">
            <span class="width-name" >{{ chef.user.name }} {{ chef.user.lastname }}</span>
          </div>
        <div class="background" >{{ chef.description_of_dishes }}</div>

        <div class="my-container">
          <div class="row my-border">
            <span class="column"> Media voti
              <p v-if="Number(chef.average_vote).toFixed() / 2 == 5" class="stars">
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
              <p v-else-if="Number(chef.average_vote).toFixed() / 2 == 4" class="stars"><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </p>
              <p v-else-if="Number(chef.average_vote).toFixed() / 2 == 3.5" class="stars"><i class="fa-solid fa-star"></i>
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
            <span class="column">Numero recensioni <span class="review-background review-width">{{ chef.reviews.length }}</span></span>
            <span class="column">
              Hai gia provato questo chef?
              <RouterLink :to="{ name: 'reviews', params: { id: chef.id } }"><button class="review-button">Inserisci recensione
                  e voto</button></RouterLink>
            </span>
            <span class="column">
              Contatta lo chef
              <RouterLink :to="{ name: 'message', params: { id: chef.id } }"><button class="message-button"> Contatta lo
                  chef</button></RouterLink>
            </span>
      </div>
    <div v-else class="error">
    <img src="../../assets/img/Error.jpeg">

    </div>
    
    
    </div>
      <div v-else class="error">
    <img src="../../assets/img/Error.jpeg">
 <h1> CHEF NOT FOUND!!</h1>
          </div>
        </div>
    </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>

.review-width {
  width: 10% !important;
}

.width-name {
  width: 100% !important;
  font-weight: 400 !important;
}

.my-container {
  margin-top: 2rem;
  border-radius: 15px;

  .my-border {
    border-radius: 15px;
  }
}

.my-card {
  border: 5px solid #5f340f !important;
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: rgba(240, 153, 46, 0.3);
  width: 100%;
  margin-bottom: 2rem
}

.chef-container{
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

    span {
      margin-bottom: 1rem;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem 0rem;
      font-weight: 200;
    }

    .review-background {
      border: 1px solid #5f340f;
      background-color: #f0992e;
      width: 5%;
      border-radius: 17px;
      font-size: 18px;
      padding: 0.2rem;
      
    }

    .background {
      border: 3px solid #5f340f;
      background-color: white;
      border-radius: 15px;
      padding: 1rem;
      width: 100%;
      font-weight: 200;
    }
  }


button{
  margin-top: 1rem;
  padding: 5px 10px;
  font-size: 14px;
  color: white;
  background-color: #5f340f;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #5f340f;
    transform: scale(1.1);
    color: white;
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

  p {
    color: gold;
    font-size: 20px
  }
}
.logo{
  width: 15rem;
}
.error{
  img{
    width: 20rem;
  }
}
</style>