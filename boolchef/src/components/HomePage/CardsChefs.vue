<script>
import axios from 'axios';

export default {
  data() {
    return {
      indexScroll: 0,
      chefs:
        [ ],
    };
  },

  methods: {
    scrollLeft() {
      this.indexScroll--;
      if (this.indexScroll >= 0) {
        this.$refs.scrollable.scrollBy({ left: -478, behavior: "smooth" });
        console.log(this.indexScroll);
      } else {
        this.$refs.scrollable.scrollBy({ left: 3500, behavior: "smooth" });
        this.indexScroll = this.Chefs.length - 2;
        console.log(this.indexScroll);
      }
    },
    scrollRight() {
      this.indexScroll++;
      if (this.indexScroll < this.Chefs.length - 2) {
        this.$refs.scrollable.scrollBy({ left: 478, behavior: "smooth" });

        console.log(this.indexScroll);
      } else {
        this.$refs.scrollable.scrollBy({ left: -3500, behavior: "smooth" });
        this.indexScroll = 0;
        console.log(this.indexScroll);
      }
    },

    // CHIAMATA API
    methods: {
        getChefs() {
            axios.get('http://127.0.0.1:8000/api/chefs')
                .then((response) => {
                    console.log(response);
                    this.chefs = (response.data.result.data);
                    this.currentPage = response.data.result.currentPage;
                })
                .catch((error) => {
                    this.$router.push({name: '404'});
                    console.log(error);
                });
        },
    },
    created() {
        this.getChefs();
    }
  }
}
</script>

<template>
  <h1>i nostri chef</h1>
  <a @click="scrollLeft()" class="left"> s</a>
  <a @click="scrollRight()" class="right"> > </a>
  <div class="chefs-container" ref="scrollable">
    <!--
      <div v-for="chef in Chefs" class="single-chef">
        {{ chef.name }}
        {{ chef.lastname }}
        {{ chef.specializazione }}
      </div>
    -->

  </div>
</template>

<style scoped lang="scss">
.chefs-container {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;

  .single-chef {
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 100%;
    min-width: 10rem;
  }
}

.left {
  display: flex;
  position: absolute;
  top: 30;
  right: 60rem;
}
</style>
