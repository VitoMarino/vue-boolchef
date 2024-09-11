<script>
export default {
    data() {
        return {
            navLinkNames: [
                {
                    label: 'Homepage',
                    name: 'home'
                },
                {
                    label: 'Trova il tuo chef',
                    name: 'search-chef'
                },
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav>
            <span>LOGO</span>
            <ul>
                <li class="ms-3" v-for="navItem in navLinkNames">
                    <router-link :to="{ name: navItem.name }">
                        {{ navItem.label }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
header {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;

    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        ul {
            list-style: none;
            display: flex;
            flex-direction: row;
        }
    }
}
</style>