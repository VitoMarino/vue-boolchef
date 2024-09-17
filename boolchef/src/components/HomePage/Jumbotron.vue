<script></script>

<template>
  <section>
    <div class="pharagraph">
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
      <img src="@/assets/img/ChefWorking.jpg" />
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  background-color: goldenrod;
  justify-content: center;

  flex-wrap: wrap;

  div {
    width: 40vw;

    h2 {
      font-size: 3rem;
    }

    .button-container {
      display: block;
      margin-top: 1rem;
    }
    .chef-button {
      /* width: 10rem;
      padding: 0.4rem;

      border-radius: 1rem;
      border: none; */
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
      width: 43.7rem;
      height: 31rem;
    }
  }
}
.pharagraph {
  padding: 2rem;
}
@media (max-width: 767px) {
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;

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
  .pharagraph {
    width: 100%;
  }
  }
</style>
