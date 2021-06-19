<template>
    <b-navbar taggleable="lg" type="dark" variant="primary">
        <b-navbar-nav left>
            <router-link class="navbar-brand" :to="{ name: 'Homepage' }">
                Home Page |
            </router-link>
            <router-link class="navbar-brand" :to="{ name: 'About' }">
                About Page |
            </router-link>
            <router-link class="navbar-brand" :to="{ name: 'Person' }">
                Search User |
            </router-link>
            <router-link class="navbar-brand" :to="{ name: 'Logout' }">
                <small>Logout</small>
            </router-link>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            token: null
        };
    }
};
</script>

<style scoped>
.navbar nav {
    padding: 0 20px;
}
</style>
