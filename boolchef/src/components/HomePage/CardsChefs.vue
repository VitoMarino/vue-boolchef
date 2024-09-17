<script>
import axios from "axios";

export default {
  data() {
    return {
      indexScroll: 0,
      Mobile: window.matchMedia("(max-width: 767px)"),
      chefs: [],


    };
  },

  methods: {

    getChef() {
      axios.get('http://127.0.0.1:8000/api/chefs')
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








    scrollLeft() {
      if (this.Mobile.matches) {
        this.indexScroll--;
        if (this.indexScroll >= 0) {
          this.$refs.scrollable.scrollBy({ left: -327, behavior: "smooth" });
          console.log(this.indexScroll);
        } else {
          this.$refs.scrollable.scrollBy({ left: 4910, behavior: "smooth" });
          this.indexScroll = this.chefs.length - 2;
          console.log(this.indexScroll);
        }
      } else {
        this.indexScroll--;
        if (this.indexScroll >= 0) {
          this.$refs.scrollable.scrollBy({ left: -327, behavior: "smooth" });
          console.log(this.indexScroll);
        } else {
          this.$refs.scrollable.scrollBy({ left: 5600, behavior: "smooth" });
          this.indexScroll = this.chefs.length - 2;
          console.log(this.indexScroll);
        }
      }
    },
    scrollRight() {
      if (this.Mobile.matches) {
        this.indexScroll++;
        if (this.indexScroll < this.chefs.length - 2) {
          this.$refs.scrollable.scrollBy({ left: 327, behavior: "smooth" });

          console.log(this.indexScroll);
        } else {
          this.$refs.scrollable.scrollBy({ left: -4700, behavior: "smooth" });
          this.indexScroll = 0;
          console.log(this.indexScroll);
        }
      } else {
        this.indexScroll++;
        if (this.indexScroll < this.chefs.length - 2) {
          this.$refs.scrollable.scrollBy({ left: 478, behavior: "smooth" });

          console.log(this.indexScroll);
        } else {
          this.$refs.scrollable.scrollBy({ left: -3500, behavior: "smooth" });
          this.indexScroll = 0;
          console.log(this.indexScroll);
        }
      }
    },

    // CHIAMATA API


  }, created() {
    this.getChef();


  },
};
</script>

<template>
  <section class="Chefs">
    <h1>I nostri chef</h1>
    <a @click="scrollLeft()" class="left">
      <i class="fa-solid fa-angle-left"></i></a>
    <a @click="scrollRight()" class="right">
      <i class="fa-solid fa-angle-right"></i>
    </a>
    <div class="chefs-container" ref="scrollable">
      <router-link
        :to="{ name: 'single-chef', params:{ id: chef.id } }"
        v-for="chef in chefs"
        class="single-chef"
      >
           <span class="image-container"><img :src="chef.photograph" :alt="chef.user.name"  v-if="chef.photograph == null"/>
          <img v-else src="../../assets/img/LOGO.png" class="logo"></span>
        <span>{{ chef.user.name }}</span>
        <span>{{ chef.user.lastname }}</span>
        {{ chef.description_of_dishes }}


        {{ chef.reviews.length }}
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
.chefs-container {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;

  .single-chef {
    display: flex;
    flex-direction: column;
    height: 28rem;
    align-items: center;
    font-size: 1rem;
    min-width: 20rem;
    background-color: white;

    margin-left: 0.4rem;

    span {
      margin: 1rem;
    }

    .image-container {
    
      height: 3rem;
      width: 3rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        font-size: 0.5rem;
      }
    }
  }
}

.left {
  position: absolute;
  margin-top: 6rem;
  left: 4rem;
}

.right {
  position: absolute;
  right: 4rem;
  margin-top: 6rem;
}

a {
  text-decoration: none;
  font-size: 3rem;
  color: gray;

  &:hover {
    color: black;
  }
}

.Chefs {
  background-color: goldenrod;
  padding: 4rem;
}

@media (max-width: 767px) {
  .chefs-container {
    width: 20.6rem;
    display: flex;
  }
}

.Chefs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo{
  width: 8rem;
}

</style>
