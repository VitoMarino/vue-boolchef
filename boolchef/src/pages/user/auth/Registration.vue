<script>

</script>

<template>
    <h3 class="text-center">
        Registrati come Chef
    </h3>

    <div class="d-flex justify-content-center">
        <form>
            <!--Name-->
            <div class="mb-3">
                <label for="name" class="form-label">Nome</label>
                <input type="text" class="form-control" name="name" id="name" aria-describedby="emailHelp">
            </div>

            <!--Lastname-->
            <div class="mb-3">
                <label for="lastname" class="form-label">Cognome</label>
                <input type="text" class="form-control" name="lastname" id="lastname" aria-describedby="emailHelp">
            </div>

            <!--Email-->
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp">
            </div>

            <!--Password-->
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" name="password" id="password">
            </div>

            <!--Fine form-->
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Ricordati</label>
            </div>
            <router-link :to="{name: 'profile'}">
                <button type="submit" class="btn btn-warning mb-5">Registrati</button>
            </router-link>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>