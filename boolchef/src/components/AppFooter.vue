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
              <a class="hover-underline-animation" href="">{{ link }}</a>
            </li>
          </ul>
          <ul>
            <li v-for="link in NavLink2">
              <a class="hover-underline-animation" href="">{{ link }}</a>
            </li>
          </ul>
          <ul>
            <li v-for="link in NavLink3">
              <a class="hover-underline-animation" href="">{{ link }}</a>
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
              <a href="https://it-it.facebook.com/reg/"><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li>
              <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiaXQifQ%3D%3D%22%7D"><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/accounts/login/"><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
              <a href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Dit-IT&lang=it-IT&enter_method=mandatory"><i class="fa-brands fa-tiktok"></i></a>
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
.hover-underline-animation {
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #f39b2f;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #f39b2f;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

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
      .logo {
        align-self: end;
        width: 30%;
      }
      img {
        width: 50%;
        margin-left: 13rem;
      }

      .link-container {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;

        li {
          margin: 0.5rem 0 0.5rem 0;
          font-size: 12px;
        }
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
      color: #ec972e;
      margin-top: 2rem;
      padding-left: 2rem;

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
        color: #ec972e;
        font-size: 16px;

        svg {
          transition: all .4s cubic-bezier(0.175, 0.885, 0, 1) !important;
          
          &:hover {
            transform: scale(1.8) !important;
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {

  .hover-underline-animation {
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #f39b2f;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #f39b2f;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

  a {
        text-decoration: none;
        color: #ec972e;
        font-size: 12px;

        svg {
          transition: all .4s cubic-bezier(0.175, 0.885, 0, 1) !important;
          
          &:hover {
            transform: scale(1.8) !important;
          }
        }
      }

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
