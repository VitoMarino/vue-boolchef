<script></script>

<template>
  <section class="become-a-chef">
    <div class="pharagraph">
      <h2>Sei uno chef? Unisciti a noi.</h2>
      <p>
        Se sei uno chef puoi registrarti gratuitatemente ed iniziare a lavorare
        fin da subito, e in più se vuoi farti notare da tutti puoi acquistare un
        abbonamento per permettere al tuo profilo di raggiungere centinaia di
        persone
      </p>
    </div>
    <div>

      <router-link :to="{name: 'access'}">
        <button>
          Registrati o accedi
        </button>
      </router-link>

    </div>
  </section>
</template>

<style scoped lang="scss">
.become-a-chef {
  padding: 10rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .pharagraph {
    width: 40rem;
  }
  div {
    display: flex;
    flex-direction: column;

    button {
      width: 10rem;
      padding: 0.4rem;
      margin: 1rem;
      border-radius: 1rem;
      border: none;
      background-color: #daa520;
      &:hover {
        color: white;
      }
    }
  }
}

@media (max-width: 767px) {
  .become-a-chef {
    div {
      justify-content: center;
      button {
        margin-left: 1rem;
      }
    }
  }
}
</style>
