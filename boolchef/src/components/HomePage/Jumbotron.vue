<script></script>

<template>
  <section class="animate pop">
    <div class="pharagraph animate pop delay-1">
      <h2>Chi Siamo</h2>
      <p>
        Siamo un sito dedicato all'affitto di chef professionisti offre un
        servizio esclusivo per chi desidera un'esperienza culinaria
        personalizzata direttamente a casa o in occasione di eventi speciali.
        Attraverso la piattaforma, è possibile scegliere tra una selezione di
        chef specializzati in diverse cucine, dai piatti tradizionali italiani a
        quelli internazionali, che possono adattare i menù in base alle
        preferenze alimentari e alle esigenze degli ospiti. Gli chef non solo
        cucinano, ma si occupano anche di acquistare gli ingredienti freschi,
        preparare i piatti sul posto e, in alcuni casi, gestire la presentazione
        e il servizio. Il sito rende semplice e conveniente trasformare
        qualsiasi evento in un’esperienza gastronomica unica, con la comodità di
        avere un professionista che cura ogni dettaglio.
      </p>
      <router-link :to="{ name: 'search-chef' }" class="button-container">
        <button class="chef-button">Cerca il tuo chef</button>
      </router-link>
    </div>
    <div class="image-container">
      <img class="animate pop delay-2" src="@/assets/img/ChefWorking.jpg" />
    </div>
  </section>
  

<svg  class="animate pop wave" viewBox="0 0 500 200">
  <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#5f340f"></path>
  <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#f39b2f" ></path>
  <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#f39b2f" opacity="0.5"></path>
</svg>


</template>

<style lang="scss" scoped>
/* animazione pagina */



/* fine animazione pagina */


section {
  display: flex;
  flex-direction: row;
  background-color: #f39b2f;
  justify-content: center;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  overflow: hidden;
  


  flex-wrap: wrap;

  div {
    width: 40vw;

    p {
      font-size: 14px;
    }

    h2 {
      font-size: 2.5rem;
    }

    .button-container {
      display: block;
      margin-top: 1rem;
      width: 24%;
    }
    .chef-button {
      padding: 5px 10px;
      font-size: 14px;
      color: black;
      background-color: rgb(255, 255, 255);
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
  }

  .image-container {

    img {
      width: 100%;
      height: 100%;
      padding: 2rem;
      border-radius: 50px;
      
    }
  }
}
.pharagraph {
  padding: 2rem;
}
@media (max-width: 767px) {

  .wave {
    width: 90%;
    margin: 0 auto;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 0 auto;

    div {

      .chef-button {
      padding: 5px 10px;
      font-size: 11px;
      color: black;
      background-color: rgb(255, 255, 255);
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

    }

    div p {
      font-size: 12px;
    }

    align-items: center;
    .image-container {
      img {
        display: none;
      }
    }
  }
  .pharagraph {
    width: 100%;
  }
}

@media (max-width: 576px) {

  h2 {
    font-size: 21px;
  }

  .wave {
    width: 90%;
    margin: 0 auto;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 0 auto;

    div {

      h2 {
    font-size: 21px;
  }

      .chef-button {
      font-size: 10px;
      color: black;
      background-color: rgb(255, 255, 255);
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

    }

    div p {
      font-size: 10px;
    }

    align-items: center;
    .image-container {
      img {
        display: none;
      }
    }
  }
  .pharagraph {
    width: 100%;
  }
}
</style>
