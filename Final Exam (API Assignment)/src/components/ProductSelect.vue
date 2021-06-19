// This page will be the view of one item

<template>
    <div class="ProductSelection">
        <Navbar />
        <div class="container mt-5 card p-3 shadow ">
            <div class="row">
                <div class="col-4">
                    <img :src="product.image_link" class="w-100 rounded-3 border border-5" />
                </div>
                <div class="col-8">
                    <h3 class="card-text">
                        <strong>{{ product.brand }}</strong>
                    </h3>
                    <h1>{{ product.name }}</h1>
                    <h3>$ {{ product.price }}</h3>
                    <p><strong>Type of Product: </strong>{{ product.product_type }}</p>
                    <p class="mt-4"><strong>Rating:</strong>{{ product.rating }}/5</p>
                    <p class="mt-4">{{ product.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    name: 'ProductSelection',
    components: {
        Navbar
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
    props: ['id'],
    mounted() {
        this.$store.dispatch('getProduct', this.id);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
