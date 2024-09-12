<script>
import axios from 'axios';

export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="container w-25">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Indirizzo</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">CV</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Foto profilo</label>
                <input type="file" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Telefono</label>
                <input type="file" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Descrizione piatti</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <select class="form-select" aria-label="Default select example">
                    <option value="1">Visibile</option>
                    <option value="2">Non visibile</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary mb-3">Submit</button>
        </form>
    </div>
</template>

<style></style>