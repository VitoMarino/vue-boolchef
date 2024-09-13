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
                address: '',
                telephone: '',
                description_of_dishes: '',
                photograph: null, //file
                CV: null,  //file
                visibility: '',
                specializations: [],

            },
            errors: {}, // Oggetto per memorizzare i messaggi di errore
            message: '',
            isRegistered: false,

            specializationsList: [
    { id: 1, name: "Italiana" },
    { id: 2, name: "Cinese" },
    { id: 3, name: "Giapponese" },
    { id: 4, name: "Indiana" },
    { id: 5, name: "Messicana" },
    { id: 6, name: "Francese" },
    { id: 7, name: "Tailandese" },
    { id: 8, name: "Spagnola" },
    { id: 9, name: "Greca" },
    { id: 10, name: "Turca" },
    { id: 11, name: "Libanese" },
    { id: 12, name: "Vietnamita" },
    { id: 13, name: "Coreana" },
    { id: 14, name: "Brasiliana" },
    { id: 15, name: "Etiope" },
    { id: 16, name: "Marocchina" },
    { id: 17, name: "Americana" },
    { id: 18, name: "Peruviana" },
    { id: 19, name: "Filippina" },
    { id: 20, name: "Russa" },
    { id: 21, name: "Iraniana" },
    { id: 22, name: "Israeliana" },
    { id: 23, name: "Portoghese" },
    { id: 24, name: "Tedesca" },
    { id: 25, name: "Cajun" },
    { id: 26, name: "Creola" },
    { id: 27, name: "Cubana" },
    { id: 28, name: "Argentina" },
    { id: 29, name: "Australiana" },
    { id: 30, name: "Sudafricana" },
    { id: 31, name: "Caribica" },
    { id: 32, name: "Nigeriana" },
    { id: 33, name: "Siriana" },
    { id: 34, name: "Afghana" },
    { id: 35, name: "Polacca" },
    { id: 36, name: "Ungherese" },
    { id: 37, name: "Svedese" },
    { id: 38, name: "Norvegese" },
    { id: 39, name: "Danese" },
    { id: 40, name: "Ceca" },
    { id: 41, name: "Nepalese" },
    { id: 42, name: "Malese" },
    { id: 43, name: "Indonesiana" },
    { id: 44, name: "Olandese" },
    { id: 45, name: "Belga" },
    { id: 46, name: "Salvadoregna" },
    { id: 47, name: "Chilena" },
    { id: 48, name: "Ecuadoriana" },
    { id: 49, name: "Colombiana" },
    { id: 50, name: "Honduregna" },
    { id: 51, name: "Ghanese" },
    { id: 52, name: "Somala" },
    { id: 53, name: "Senegalese" },
    { id: 54, name: "Mongola" },
    { id: 55, name: "Singaporiana" },
    { id: 56, name: "Kuwaitiana" },
    { id: 57, name: "Tunisina" },
    { id: 58, name: "Algerina" },
    { id: 59, name: "Serba" },
    { id: 60, name: "Croata" },
    { id: 61, name: "Bosniaca" },
    { id: 62, name: "Irlandese" },
    { id: 63, name: "Scozzese" },
    { id: 64, name: "Gallese" },
    { id: 65, name: "Uzbeka" },
    { id: 66, name: "Kazaka" },
    { id: 67, name: "Georgiana" },
    { id: 68, name: "Armena" },
    { id: 69, name: "Birmana" },
    { id: 70, name: "Cambogiana" },
    { id: 71, name: "Yemenita" },
    { id: 72, name: "Omanita" },
    { id: 73, name: "Bhutanese" },
    { id: 74, name: "Fijiana" },
    { id: 75, name: "Hawaiana" },
    { id: 76, name: "Malgascia" },
    { id: 77, name: "Zambiana" },
    { id: 78, name: "Papua Nuova Guineana" },
    { id: 79, name: "Bielorussa" },
    { id: 80, name: "Ucraina" },
    { id: 81, name: "Macedone" },
    { id: 82, name: "Albanese" },
    { id: 83, name: "Bulgara" },
    { id: 84, name: "Romena" },
    { id: 85, name: "Sri Lankese" },
    { id: 86, name: "Tibetan" },
    { id: 87, name: "Pashtun" },
    { id: 88, name: "Tatara" },
    { id: 89, name: "Basca" },
    { id: 90, name: "Bavarese" },
    { id: 91, name: "Cantonese" },
    { id: 92, name: "Sichuanese" },
    { id: 93, name: "Uyghur" },
    { id: 94, name: "Maghrebina" }
],
        };
    },
    methods: {
        prendiFileUpload(event, field) {
            const fileInput = event.target;
            this.form[field] = fileInput.files[0]; // Assegna il file al campo corrispondente
        },
        submitForm() {
            // Crea un oggetto FormData per gestire i file e altri campi
            const formData = new FormData();
            formData.append('address', this.form.address);
            formData.append('telephone', this.form.telephone);
            formData.append('description_of_dishes', this.form.description_of_dishes);
            formData.append('visibility', this.form.visibility);

            // Aggiungi le specializzazioni
            this.form.specializations.forEach((specialization) => {
                formData.append('specializations[]', specialization);
            });

            // Aggiungi i file al FormData se presenti
            if (this.form.photograph) {
                formData.append('photograph', this.form.photograph);
            }
            if (this.form.CV) {
                formData.append('CV', this.form.CV);
            }

            // Invia la richiesta con Axios
            axios.post('http://127.0.0.1:8000/api/chefs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.log('Error:', error.response);
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        },
    };
</script>

<template>
    <h3 class="text-center">
        Completa il tuo profilo
    </h3>

    <div class="d-flex justify-content-center">
        <form @submit.prevent="submitForm">
            
            <div class="mb-3">
                <label for="address" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" name="address" v-model="form.address" id="address" aria-describedby="emailHelp">
            </div>

            
            <div class="mb-3">
                <label for="telephone" class="form-label">Numero di telefono</label>
                <input type="text" class="form-control" name="telephone" v-model="form.telephone" id="telephone" aria-describedby="emailHelp">
            </div>

            
            <div class="mb-3">
                <label for="description_of_dishes" class="form-label">Descrizione piatti</label>
                <textarea class="form-control mb-3" name="description_of_dishes" v-model="form.description_of_dishes" id="description_of_dishes"></textarea>
            </div>

            
            <div class="mb-3">
                <label for="photograph" class="form-label">Carica foto profilo</label>
                <input class="form-control mb-3" type="file" name="photograph" id="photograph" @change="prendiFileUpload($event, 'CV')">
            </div>

            
            <div class="mb-3">
                <label for="CV" class="form-label">Carica CV</label>
                <input class="form-control mb-3" type="file" name="CV" id="CV" @change="prendiFileUpload($event, 'CV')">
            </div>

            
            <div>
                <label for="visibility">
                    Seleziona visibilità
                </label>
                <select class="form-select mb-3" aria-label="Default select example" name="visibility" v-model="form.visibility" id="visibility">
                    <option value="0">
                        Non visibile
                    </option>
                    <option value="1">
                        Visibile
                    </option>
                </select>
            </div>

            
            <div>
                <label for="specializations">
                    Seleziona la specializzazione
                </label>
                <div class="d-flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    <div v-for="(specialization, index) in specializationsList" :key="specialization.id">
                        <input type="checkbox" name="specializations[]" :id="specialization + specialization.id" v-model="form.specializations" class="btn-check" autocomplete="off">
                        <label class="btn btn-outline-primary m-1" :for="specialization + specialization.id">
                            {{ specialization.name }}
                        </label>
                    </div>
                </div>
            </div>

            
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Ricordati</label>
            </div>
            <button v-if="isRegistered === false" type="submit" class="btn btn-warning mb-5">Registrati</button>
            <router-link v-else :to="{ name: 'dashboard' }">
                <span class="btn btn-warning mb-5">Registrati</span>
            </router-link>
        </form>
    </div>
</template>

<style></style>
-->