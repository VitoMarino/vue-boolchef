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
      <div class="col-lg-12 col-md-8">
        <h1 class="animate pop" >Prenotare il <span class="text-style">proprio chef personale</span> non è mai stato così semplice</h1>
      </div>
    </div>
    <div class="row">
      <div class="cards-container ">
        <article v-for="item in items" class="card card--1 animate pop" >
          <div class="card__info-hover">
            
          </div>
          
          <div class="card__info animate pop">
            <h6 class="card__title">{{ item.title }}</h6>
            <span>{{ item.content }}</span>
          </div>
        </article>
        <div class="card misure text-center color animate pop">
            <h6 class="color-black">Trova lo <span class="my-text-color">chef</span> più adatto a te</h6>
            <router-link :to="{ name: 'search-chef' }">
              <button class="chef-button">Cerca il tuo chef</button>
            </router-link>
          </div>

        <div>
          <!-- <div v-for="item in items" class="card misure text-center my-card ">
            <div class="card-img"></div>
              <a href=""> <div class="card-img-hover"></div> </a>
            <div class="card-body card-info">
              <h6>{{ item.title }}</h6>
              <span>{{ item.content }}</span>
            </div>
          </div> -->
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

h1 {
  font-weight: 200;

  .text-style {
    color: #f39b2f;
    font-weight: 700;
  }
}

h6 {
  color: #f39b2f;
  font-weight: 600;
}

.color-black {
  color: black;
  font-weight: 200;
}

.my-text-color {
  color: #5f340f;
  font-weight: 600;
}

div.card__info {

  span {
    font-weight: 200;
  }
}


.misure {
  width:calc((100% / 3) - 25px);
}

.color {
  background-color: #f39b2f !important;
}

.card-info {
  z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
}

.card__info-hover {
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
}

.card {
  margin-right: 25px;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  width:calc((100% / 3) - 25px);
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
  margin: 0.7rem;
  padding: 3rem;

    &:hover {
      box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
      transform: scale(1.10, 1.10);
      border: 2px solid #5f340f;
    }
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 3rem 0 3rem 0;
  margin-bottom: 5rem;
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
}
.chef-button {
  padding: 5px 10px;
  font-size: 14px;
  color: black;
  background-color: #f4e3bd;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    color: white;
    transform: scale(1.1);
    background-color: #5f340f;
  }
}
@media (max-width: 767px) {

  .chef-button {
  font-size: 9px;
  color: black;
  background-color: #f4e3bd;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    color: white;
    transform: scale(1.1);
    background-color: #5f340f;
  }
}

  .card {
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  width:calc((100% / 3));
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
  margin: 0.7rem;
  padding: 3rem;

  .card__info, .card__title, h6 {
    font-size: 12px;
  }

    &:hover {
      box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
      transform: scale(1.10, 1.10);
      border: 2px solid #5f340f;
    }
}

  h1 {
  width: 70%;
  margin: 0 auto;
  font-size: 25px;

  }

  .cards-container {
    display: flex;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 767px;
  }
}

@media (max-width: 576px) {

  .chef-button {
  font-size: 10px;
  color: black;
  background-color: #f4e3bd;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    color: white;
    transform: scale(1.1);
    background-color: #5f340f;
  }
}

  .chef-button {
  padding: 5px 10px;
  font-size: 12px;
  color: black;
  background-color: #f4e3bd;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    color: white;
    transform: scale(1.1);
    background-color: #5f340f;
  }
}

  .card {
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  width: 50%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
  margin: 0.7rem;
  padding: 2rem;

  .card__info, .card__title, h6 {
    font-size: 12px;
    display: block;
    text-align: center;
  }

    &:hover {
      box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
      transform: scale(1.10, 1.10);
      border: 2px solid #5f340f;
    }
}

  h1 {
  width: 70%;
  margin: 0 auto;
  font-size: 20px;

  }

  .cards-container {
    display: flex;
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
