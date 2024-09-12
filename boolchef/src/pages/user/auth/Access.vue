<script>

</script>

<template>
    <h3 class="text-center">
        Accedi o registrati gratuitamente
    </h3>

    <div class="d-flex justify-content-center">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Ricordati</label>
            </div>
            <!--Commento momentaneo: Bisogna creare un if per indicare che se l'utente si logga può entrare-->
            <router-link :to="{name: 'dashboard'}">
                <button type="submit" class="btn btn-warning mb-3">Accedi</button>
            </router-link>
            <div>
                <router-link :to="{name: 'registration'}">
                    <a href="">Se non hai ancora un account registrati</a>
                </router-link>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: rgb(228, 170, 22);

    &:hover{
        text-decoration: underline;
    }
}

</style>