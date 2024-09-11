<script>
export default {
<<<<<<< HEAD
    data() {
        return {
        navLinkNames : [
            {
                label: 'Homepage',
                name: ''
            }
        ]
        }
    }
}
=======
  data() {
    return {
      activeLens: false,
      headerLink: [
        {
          id: 0,
          title: "Home",
          active: false,
          url: "#",
        },
        {
          id: 1,
          title: "Services",
          active: true,
          url: "#",
          dropdown: ["All Services", "Service Single Page"],
        },
        {
          id: 2,
          title: "About",
          active: true,
          url: "#",
          dropdown: ["About me", "Our Sponsors", "Contact"],
        },
        {
          id: 3,
          title: "Videos",
          active: true,
          url: "#",
          dropdown: ["All Playlist", "Playlist Page", "Video Single Page"],
        },
        {
          id: 4,
          title: "Blog",
          active: false,
          url: "#",
        },
        {
          id: 5,
          title: "Store",
          active: true,
          new: true,
          url: "#",
          dropdown: ["Simple Product", "Variable Group"],
        },
      ],
    };
  },
  methods: {
    invertInput() {
      console.log(this.activeLens);
      if (this.activeLens === false) {
        this.activeLens = true;
      } else {
        this.activeLens = false;
      }
    },
  },
};
>>>>>>> 1d9aa501d6da28140f38edd9d03e442c2e9fbcc5
</script>

<template>
  <header>
    <div
      class="container-huge d-flex align-items-center justify-content-between w-100"
    >
      <div>
        <img src="../images/logo-200x34.png" alt="" />
      </div>

<<<<<<< HEAD
            <div class="col-8 text-center justify-content-center d-flex align-items-center">
                <ul class="d-flex">
                    <li>Homepage</li>
                    <li>Trova il tuo Chef</li>
=======
      <nav class="navbar navbar-expand-lg py-4">
        <!--botton fluid a scomparsa-->
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!--Headerlink title-->
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              v-for="item in headerLink"
              :key="item.id"
              class="navbar-nav me-2 my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: 100px"
            >
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white my-color-font-a"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong
                    >{{ item.title }}
                    <span id="span-special" v-if="item.new === true">new</span>
                    <i
                      class="fa-solid fa-chevron-down my-i-arrow"
                      v-if="item.active === true"
                    ></i
                  ></strong>
                </a>
                <!--Dropdown menù-->
                <ul
                  class="dropdown-menu my-bg-color"
                  v-if="item.active === true"
                >
                  <li
                    class="my-li-color"
                    v-for="(link, index) in item.dropdown"
                    :key="index"
                  >
                    {{ link }}
                  </li>
>>>>>>> 1d9aa501d6da28140f38edd9d03e442c2e9fbcc5
                </ul>
                <!--Chiusura primo ul con li-->
              </li>
            </ul>

            <!--Form, bottone, input e icons-->
            <div class="d-flex" role="search">
              <li class="me-4">
                <button>Schedule a workout</button>
              </li>
              <button @click="invertInput()" class="my-lens my-display">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
<<<<<<< HEAD
=======

            <input
              :class="activeLens === false ? 'my-hidden' : 'my-visible'"
              type="text"
            />
            <span><i class="fa-solid fa-cart-shopping m-3 my-color"></i></span>
          </div>
>>>>>>> 1d9aa501d6da28140f38edd9d03e442c2e9fbcc5
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/Style/partials/variables.scss" as *;
header {
  background-color: black !important;
}

li {
  list-style: none;
}

#span-special {
  color: black;
  border-radius: 0.1rem;
  padding: 0.4rem;
  background-color: #fff941 !important;
}

i.my-i-arrow {
  font-size: 0.9rem;
}

.navbar .dropdown-toggle::after {
  display: none;
}

// Dropdown menu
ul.my-bg-color {
  background-color: $bg_black !important;

  li.my-li-color {
    color: $gray;
    padding-left: 0.5rem;
    cursor: pointer;

    &:hover {
      color: white;
      background-color: #4154ff;
    }
  }
}

a.my-color-font-a {
  font-size: 1.15rem;
  color: $color-grey !important;

  &:hover {
    color: white !important;
  }
}

a.my-hover-a {
  color: white;

  &:hover {
    background-color: #4154ff !important;
  }
}

// Button lens
button.my-lens {
  border: none;
  background-color: $bg-black;
  color: $color-grey;

  &:hover {
    color: white;
  }
}

// Input
input.my-hidden {
  display: none;
}

input.my-visible {
  display: inline-block;
}

input {
  border-radius: 1rem;
  width: 200px;
}

i.my-color {
  color: white;
}
</style>
