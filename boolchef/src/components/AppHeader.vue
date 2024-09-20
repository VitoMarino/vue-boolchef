<script>
export default {
  data() {
    return {
      navLinkNames: [
        {
          label: "Homepage",
          name: "home",
        },
        {
          label: "Trova il tuo chef",
          name: "search-chef",
        },
      ],
    };
  },
};
</script>

<template>
    <nav class="navbar bg-body-tertiary hamburgermenu">
    <div class="container-fluid">
      <img src="../assets/img/STRECHED-LOGO.png" class="mobile" alt="logo" />
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end w-50" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Boolchef</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul>
            <li class="mb-3 type" v-for="navItem in navLinkNames">
              <router-link class="type" :to="{ name: navItem.name }">
                {{ navItem.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <header>
    <nav>
      <span>
        <h3 class="animate pop" >Bool<span>chef</span> </h3>
        <img src="../assets/img/LOGO.png" class="desktop animate pop" alt="logo" />
        <img src="../assets/img/STRECHED-LOGO.png" class="mobile animate pop" alt="logo" />
      </span>
      <ul>
        <li class="ms-3 nav-button animate pop" v-for="navItem in navLinkNames">
          <router-link :to="{ name: navItem.name }">
            {{ navItem.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>

h3 {
  display: inline-block;
  font-weight: 200;
  margin-right: 0.5rem;

  span {
    color: #f39b2f;
    font-weight: 600;
  }
}

header {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 4rem;
  

  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    .type {
      background-color: #f39b2f;
    }
    }

    img {
      width: 15rem;
      height: 5rem;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;

      a {
        text-decoration: none;
        color: black
      }
    }
  }

.mobile {
  display: none;
}

.nav-button {
      padding: 5px 10px;
      font-size: 14px;
      color: black;
      background-color: #f4e3bd;
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
@media (max-width: 767px) {

  h3 {
  display: none;

  span {
    color: #f39b2f;
    font-weight: 600;
  }
}

  .mobile {
    display: inline-block;
    width: 4rem;
    height: 2rem;
  }
  .desktop {
    display: none;
  }
}

.nav-button {
      padding: 5px 10px;
      font-size: 10px;
      color: black;
      background-color: #f4e3bd;
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

@media (max-width: 576px) {

  h3 {
  display: inline-block;
  font-weight: 200;
  margin-right: 0.5rem;

  span {
    color: #f39b2f;
    font-weight: 600;
  }
}

header {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 4rem;
  

  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    a {
      color: black !important;
      text-decoration: none !important;

      &:hover {
        color: white;
      }
    }

    img {
      width: 15rem;
      height: 5rem;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
    }
  }
}
.mobile {
  display: none;
}

.nav-button {
      padding: 5px 10px;
      font-size: 14px;
      color: black;
      background-color: #f4e3bd;
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

  header{
    display: none;
  }

  .mobile {
    display: inline-block;
    width: 13%;
    height: 100%;
  }

  
}

@media (min-width: 576px) and (max-width: 1700.00px) {
  .mobile {
    display: inline-block;
    width: 25%;
    height: 100%;
  }
  .desktop {
    display: none;
  }
  
  .hamburgermenu {
    display: none;
  }

}
</style>
