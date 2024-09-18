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
      axios.get('http://127.0.0.1:8000/api/sponsorships')
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
    <h1>I nostri migliori <span>chef</span></h1>
    <a @click="scrollLeft()" class="left">
      <i class="fa-solid fa-angle-left"></i></a>
    <a @click="scrollRight()" class="right">
      <i class="fa-solid fa-angle-right"></i>
    </a>
    <div class="chefs-container" ref="scrollable">
      <router-link :to="{ name: 'single-chef', params: { id: chef.id } }" v-for="chef in chefs" class="single-chef">
        <span class="image-container"><img :src="chef.photograph" :alt="chef.user.name"
            v-if="chef.photograph == null" />
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
  padding: 2rem 0 5rem 0;

  .single-chef {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    height: 24rem;
    align-items: center;
    font-size: 12px;
    min-width: 20rem;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    margin-left: 1.5rem;

    &:hover {
      box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
      transform: scale(1.10, 1.10);
    }

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
  margin-top: 16rem;
  left: 3rem;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
}

.right {
  position: absolute;
  right: 3rem;
  margin-top: 16rem;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
}

a {
  text-decoration: none;
  font-size: 3rem;
  color: gray;

  &:hover {
    color: #f39b2f;
    transform: scale(1.10, 1.10);
  }
}

.Chefs {
  background-color: #f39b2f;
  border-radius: 15px;

  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
  margin-top: 12rem;

  h1 {
    padding-top: 1rem;
    font-weight: 200;

    span {
      color: #5f340f;
      font-weight: 700;
    }
  }
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

.logo {
  width: 8rem;
}
</style>
