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
  <header>
    <nav>
      <span>
        <img src="../assets/img/LOGO.png" class="desktop" alt="logo" />
        <img src="../assets/img/STRECHED-LOGO.png" class="mobile" alt="logo" />
      </span>
      <ul>
        <li class="ms-3" v-for="navItem in navLinkNames">
          <router-link :to="{ name: navItem.name }">
            {{ navItem.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
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
      color: black;
      text-decoration: none;
      &:hover {
        color: goldenrod;
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
@media (max-width: 767px) {
  .mobile {
    display: inline-block;
    width: 6rem;
    height: 4rem;
  }
  .desktop {
    display: none;
  }
}
</style>
