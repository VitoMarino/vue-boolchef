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
        <h3 class="mb-3">Modifica profilo</h3>
        <form>
            <div class="mb-3">
                <label for="address" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" id="address">
            </div>
            <div class="mb-3">
                <label for="CV" class="form-label">Curriculum Vitae</label>
                <input type="file" class="form-control" id="CV">
            </div>
            <div class="mb-3">
                <label for="photograph" class="form-label">Foto profilo</label>
                <input type="file" class="form-control" id="photograph">
            </div>
            <div class="mb-3">
                <label for="telephone" class="form-label">Telefono</label>
                <input type="text" class="form-control" id="telephone">
            </div>
            <div class="mb-3">
                <label for="description_of_dishes" class="form-label">Descrizione piatti</label>
                <input type="password" class="form-control" id="description_of_dishes">
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