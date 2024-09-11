<script>
export default {
  name: "",
  data() {
    return {
      NavLink1: [
        "Home",
        "Chi Siamo",
        "Servizi",
        "Chef Disponibili",
        "Domande Frequenti (FAQ)",
        "Blog",
        "Recensioni",
        "Contatti",
        "Privacy Policy",
        "Termini e Condizioni",
        "Lavora con noi",
      ],
      NavLink2: [
        "Eventi Speciali",
        "Regala un Chef",
        "Testimonianze",
        "Collaborazioni",
        "Newsletter",
        "Assistenza Clienti",
      ],
      NavLink3: [
        "Menu Personalizzati",
        "Corsi di Cucina",
        "Termini di Servizio",
        "Cookie Policy",
      ],
    };
  },
};
</script>

<template>
  <footer>
    <section class="footer-container">
      <nav class="navlinks">
        <div class="link-container">
          <ul>
            <li v-for="link in NavLink1">
              <a href="">{{ link }}</a>
            </li>
          </ul>
          <ul>
            <li v-for="link in NavLink2">
              <a href="">{{ link }}</a>
            </li>
          </ul>
          <ul>
            <li v-for="link in NavLink3">
              <a href="">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div class="logo"><img src="../assets/img/LOGO.png" /></div>
      </nav>
      <section class="bottom-footer">
        <div class="socials">
          <h6>Seguici su</h6>
          <ul>
            <li>
              <a><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li>
              <a><i class="fa-brands fa-twitter"></i></a>
            </li>
            <li>
              <a><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
              <a><i class="fa-brands fa-tiktok"></i></a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <p>Copyright © 2024 Boolchef. Tutti i diritti riservati.</p>
        </div>
      </section>
    </section>
  </footer>
</template>

<style scoped>
footer {
  background-color: #182427;
  display: flex;
  flex-direction: column;
  max-width: 100vw;

  .footer-container {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;

    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: gray 1px solid;
      img {
        width: 30rem;
        height: 10rem;
      }
      .link-container {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
      }
    }
  }
  .bottom-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .copyright {
      color: lightgray;
      font-size: 0.8rem;
      margin-top: 10rem;
    }
    .socials {
      display: flex;
      flex-direction: row;
      font-size: 0.8rem;
      color: lightgray;
      margin-top: 2rem;
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;

        li {
          margin-left: 1rem;
        }
      }
      a {
        text-decoration: none;
        color: white;
        font-size: 1rem;
      }
    }
  }
}

@media (max-width: 767px) {
  .logo {
    display: none;
  }
  footer {
    .bottom-footer {
      display: none;
    }
  }
}
</style>
