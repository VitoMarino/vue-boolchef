<script></script>

<template>
  <section>
    <div>
      <h2>lorem</h2>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
        obcaecati earum dolore ea nemo minima voluptas similique animi iste,
        molestiae fuga omnis fugiat repellat, ratione, velit temporibus ullam
        architecto corrupti.

        <button>Inizia</button></span
      >
    </div>
    <div class="image-container"></div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: row;
  background-color: #f29219;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
  div {
    width: 40rem;
    h2 {
      font-size: 3rem;
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        width: 5rem;
        margin: 1rem;
      }
    }
  }
  .image-container {
    background-color: red;
    padding: 10rem;
  }
}
</style>
