<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4 red">
                <div class="text">
                    <h3>
                        Più di 45500 ospiti hanno già goduto dell'esperienza
                    </h3>
                </div>
                <div class="punteggio">
                    <h1>
                        5.00
                    </h1>
                    <p>
                        Punteggio medio basato su 9349 recensioni
                    </p>
                </div>
            </div>
            <div class="col-8 green d-flex flex-wrap">
                <div class="chef">
                    <h5>punteggio</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
                </div>
                <div class="pulizia">
                    <h5>punteggio</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
                </div>
                <div class="qualita cibo">
                    <h5>punteggio</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
                </div>
                <div class="presentazione">
                    <h5>punteggio</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
                </div>
            </div>
        </div>

        <hr class="color">


    </div>
</template>

<style scoped lang="scss">
    .red{
        background-color: grey;
        height: 100px;
    }

    .green{
        background-color: grey;
        height: 200px
    }

    .color{
        color: grey;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
</style>
