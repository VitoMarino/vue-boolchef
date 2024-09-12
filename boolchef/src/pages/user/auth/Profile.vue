<script>

</script>

<template>
    <h3 class="text-center">
        Completa il tuo profilo
    </h3>

    <div class="d-flex justify-content-center">
        <form>
            <!--Address-->
            <div class="mb-3">
                <label for="address" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" name="address" id="address" aria-describedby="emailHelp">
            </div>

            <!--Telephone-->
            <div class="mb-3">
                <label for="telephone" class="form-label">Numero di telefono</label>
                <input type="text" class="form-control" name="telephone" id="telephone" aria-describedby="emailHelp">
            </div>

            <!--Piatti-->
            <div class="mb-3">
                <label for="description_of_dishes" class="form-label">Descrizione piatti</label>
                <textarea class="form-control mb-3" name="description_of_dishes" id="description_of_dishes"></textarea>
            </div>

            <!--Foto profilo-->
            <div class="mb-3">
                <label for="photograph" class="form-label">Carica foto profilo</label>
                <input class="form-control mb-3" type="file" name="photograph" id="photograph">
            </div>

            <!--CV-->
            <div class="mb-3">
                <label for="CV" class="form-label">Carica CV</label>
                <input class="form-control mb-3" type="file" name="CV" id="CV">
            </div>

            <!--Visibilità-->
            <div>
                <label for="visibility">
                    Seleziona visibilità
                </label>
                <select class="form-select mb-3" aria-label="Default select example" name="visibility" id="visibility">
                    <option value="0">
                        Non visibile
                    </option>
                    <option value="1">
                        Visibile
                    </option>
                </select>
            </div>

            <!--Specializzazione-->
            <div>
                <label for="specializations">
                    Seleziona la specializzazione
                </label>
                <div class="d-flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" name="specializations[]" id="specializations" class="btn-check" autocomplete="off">
                    <label class="btn btn-outline-primary m-1" for="specialization">
                        Italiana
                    </label>
                </div>
            </div>

            <!--Fine form-->
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Ricordati</label>
            </div>
            <router-link :to="{ name: 'dashboard' }">
                <button type="submit" class="btn btn-warning mb-5">Registrati</button>
            </router-link>
        </form>
    </div>
</template>

<style></style>