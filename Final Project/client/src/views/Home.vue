<template>
    <div class="home">
        <div class="container mt-6  pt-3 jumbotron">
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="NTF logo" src="../assets/icon.png" />
            <h4 class="display-4">Welcome to the Galaxy NTF Marketplace</h4>

            <h5>Please Sign in, or Register</h5>
            <router-link to="/register">Register</router-link> |
            <router-link to="/login">Login</router-link>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    created() {
        document.title = 'Galaxy NTF Marketplace';
    },
    components: {}
};
</script>

<style scoped></style>
