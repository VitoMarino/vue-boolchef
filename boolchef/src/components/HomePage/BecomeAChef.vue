<script></script>

<template>
  <section class="become-a-chef">
    <div class="pharagraph">
      <h2 class="animate pop delay-1" >Sei uno chef? <span>Unisciti a noi.</span></h2>
      <p class="animate pop delay-2" >
        Se sei uno chef puoi registrarti gratuitatemente ed iniziare a lavorare
        fin da subito, e in più se vuoi farti notare da tutti puoi acquistare un
        abbonamento per permettere al tuo profilo di raggiungere centinaia di
        persone
      </p>
    </div>
    
    <div>
      <a class="btn btn-primary become-chef-button animate pop delay-3" href="http://127.0.0.1:8000/">Registrati o accedi</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.become-a-chef {
  padding: 10rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    justify-content: center;
  }

  .become-chef-button {
      padding: 5px 10px;
      font-size: 14px;
      color: black;
      background-color: #f4e3bd;
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

  .pharagraph {
    width: 50%;

    h2 {
      font-weight: 200;
    }

    span {
      color: #f39b2f;
      font-weight: 700;
    }
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
    .pharagraph {
    width: 70%;

    p {
      font-size: 12px;
    }

    h2 {
      font-weight: 200;
      font-size: 23px;
    }

    span {
      color: #f39b2f;
      font-weight: 700;
    }
  }
  }
  

  .become-a-chef {
  padding: 10rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    justify-content: center;
  }

  .become-chef-button {
      width: 25%;
      margin-top: 1rem;
      font-size: 12px;
      color: black;
      background-color: #f4e3bd;
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
}

@media (max-width: 576px) {

.pharagraph {
  width: 40rem;

  p {
    font-size: 10px;
    width: 60%;
  }

  h2 {
    font-weight: 200;
    font-size: 20px;
    
  }

  span {
    color: #f39b2f;
    font-weight: 700;
  }
}

.become-a-chef {
padding: 4rem 4rem;
display: flex;
flex-direction: column;
justify-content: space-between;

div {
  justify-content: center;
}

.become-chef-button {
    width: 30%;
    margin-top: 1rem;
    font-size: 12px;
    color: black;
    background-color: #f4e3bd;
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
}
</style>
