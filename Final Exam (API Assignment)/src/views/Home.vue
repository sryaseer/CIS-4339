<template>
    <div class="home">
        <Navbar />
        <Product />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Product from "@/components/Product.vue";

export default {
    name: "Home",
    components: {
        Navbar,
        Product
    }
};
</script>
