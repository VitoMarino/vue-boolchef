<script>
export default {
    data() {
        return {
        navLinkNames : [
            {
                label: 'Homepage',
                name: ''
            }
        ]
        }
    }
}
</script>

<template>
    <div class="container p-3">
        <div class="row">
            <div class="col-2 d-flex align-items-center text-center">
                <h2>
                    LOGO
                </h2>
            </div>

            <div class="col-8 text-center justify-content-center d-flex align-items-center">
                <ul class="d-flex">
                    <li>Homepage</li>
                    <li>Trova il tuo Chef</li>
                </ul>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
    li{
        list-style-type: none;
        margin-right: 5rem;
    }

    button{
        margin-right: 2rem;
    }
</style>
