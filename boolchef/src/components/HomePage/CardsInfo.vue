<script>
export default {
  data() {
    return {
      items: [
        { message: "Chatta" },
        { message: "Prenota" },
        { message: "Personalizza" },
        { message: "Menu" },
        { message: "Esperinza" },
        { message: "Trova il tuo chef" },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row text-center mt-5">
      <h2>Come Funziona</h2>
    </div>
    <div class="row">
      <div
        class="col-12 d-flex justify-content-evenly flex-wrap cards-container"
      >
        <div v-for="item in items" class="card misure text-center">
          <div class="card-body">
            {{ item.message }}
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
