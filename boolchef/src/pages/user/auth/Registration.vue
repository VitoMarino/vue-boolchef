<script>

</script>

<template>

</template>

<style>

</style>

<!--
<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            errors: {}, // Oggetto per memorizzare i messaggi di errore
            message: '',
            isRegistered: false,
        };
    },
    methods: {
        submitForm() {
            axios
            .post('http://127.0.0.1:8000/api/users', this.form) // Passare direttamente il form
            .then((response) => {
                console.log(response);
                this.message = response.data.message;
                this.errors = {}; // Cancella gli errori se la richiesta ha successo
                this.$router.push({ name: 'profile' });
                this.isRegistered = true;
            })
            .catch((error) => {
                console.log(error);

                if (error.response && error.response.status === 422) {
                this.errors = error.response.data.errors;
                // Non ripopolare il form se il backend non restituisce "old"
                }
                this.isRegistered = false;
                });
            },
        },
    };
</script>

<template>
    <h3 class="text-center">
        Registrati come Chef
    </h3>

    <div class="d-flex justify-content-center">
        <form @submit.prevent="submitForm">
            
            <div class="mb-3">
                <label for="name" class="form-label">Nome</label>
                <input type="text" class="form-control" name="name" v-model="form.name" id="name" aria-describedby="emailHelp">
            </div>

            <div class="mb-3">
                <label for="lastname" class="form-label">Cognome</label>
                <input type="text" class="form-control" name="lastname" v-model="form.lastname" id="lastname" aria-describedby="emailHelp">
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">E-mail</label>
                <input type="email" class="form-control" name="email" v-model="form.email" id="email" aria-describedby="emailHelp">
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" name="password" v-model="form.password" id="password">
            </div>

            <div class="mb-3">
                <label for="passwordConfirmation" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" name="passwordConfirmation" v-model="form.password_confirmation" id="passwordConfirmation">
            </div>

            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Ricordati</label>
            </div>
            <button v-if="isRegistered === false" type="submit" class="btn btn-warning mb-5">Registrati</button>
            <router-link v-else :to="{name: 'profile'}">
                <span class="btn btn-warning mb-5">Registrati</span>
            </router-link>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>
-->