<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Contatta il tuo chef",
          content:
            "Scegli il tuo chef preferito e fatti contattare attraverso il nostro servizio di messaggistica.",
        },
        {
          title: "Prenota",
          content:
            "Prenota qualisasi chef vicino a te e puoi cancellare fino a 30 minuti dall'orario stabilito.",
        },

        {
          title: "Menu",
          content: "Scegli tra oltre 50 tipi di cucine diverse.",
        },
        {
          title: "Esperienza",
          content:
            "I nostri chef sono certificati e tutti con una grande esperienza passata.",
        },
        {
          title: "Pagamento",
          content:
            "Paga in sicurezza dopo che lo chef abbia finito il suo lavoro",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row text-center mt-5">
      <h2>Prenotare il proprio chef personale non è mai stato così semplice</h2>
    </div>
    <div class="row">
      <div class="cards-container">
        <div>
          <div v-for="item in items" class="card misure text-center">
            <div class="card-body">
              <h6>{{ item.title }}</h6>
              <span>{{ item.content }}</span>
            </div>
          </div>
          <div class="card misure text-center">
            <h6>Trova lo chef più adatto a te</h6>
            <router-link :to="{ name: 'search-chef' }">
              <button class="chef-button">Cerca il tuo chef</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.misure {
  padding: 3rem;
  width: calc((100% / 3) - 3rem);
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 0.4rem;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
}
.chef-button {
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
@media (max-width: 767px) {
  .cards-container {
    display: flex;
    flex-direction: column;
  }

  .misure {
    width: 20rem;
    height: 20rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 767px;
  }
}
</style>
