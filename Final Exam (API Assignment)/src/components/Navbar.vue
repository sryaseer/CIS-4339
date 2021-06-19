<template>
    <div class="Navbar">
        <b-navbar taggleable="lg" type="dark" variant="primary" class="navbar">
            <b-navbar-nav left>
                <router-link class="navbar-brand" :to="{ name: 'Home' }">
                    Home Page |
                </router-link>
            </b-navbar-nav>
            <b-navbar-nav left>
                <router-link class="navbar-brand" :to="{ name: 'ProductSelection' }">
                    Product Selection Page |
                </router-link>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-form>
                    <b-input placeholder="Enter Item name"></b-input>
                </b-form>
                <b-btn>Search</b-btn>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
};
</script>

<style scoped></style>
