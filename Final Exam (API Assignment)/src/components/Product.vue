// This page will be the list view of all the products

<template>
    <div class="Product d-flex align-tiems-stretch flex-wrap w-75 container">
        <ProductCard v-for="product of products" :key="product.id" :product="product" />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ProductCard from '../components/ProductCard.vue';
export default {
    name: 'Product',
    components: {
        Navbar,
        ProductCard
    },
    mounted() {
        this.$store.dispatch('getProducts');
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
