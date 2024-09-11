<script>
export default {
  name: "",
  data() {
    return {
      sponsors: [
        "Boolflix",
        "Boolzapp",
        "Booleaner",
        "Boolean",
        "Lyricsmus",
        "Boolean",
        "Bool-Comics",
        "ProjeXpert",
      ],
    };
  },
};
</script>

<template>
  <section class="sponsors-container">
    <div class="content">
      <h4>Sponsors</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore
        perferendis nisi, beatae cupiditate assumenda accusamus maiores totam
        commodi consequatur reiciendis nihil distinctio earum inventore saepe ex
        fugit maxime. Recusandae.
      </p>
    </div>

    <div class="sponsors">
      <span v-for="sponsor in sponsors">
        {{ sponsor }}
      </span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sponsors-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: #f29219;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      font-size: 2rem;
      padding-bottom: 1rem;
    }
    padding-bottom: 2rem;
  }
  .sponsors {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    span {
      padding: 7rem;
    }
    justify-content: center;
  }
}
</style>
