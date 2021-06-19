// this is to edit the singular card template

<template>
    <div class="col-3 mt-3 p-2 shadow ">
        <div class="card h-100 text-left">
            <img class="w-100 border border-5" :src="product.image_link" alt />
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="{ name: 'ProductSelection', params: { id: product.id } }">{{ product.name }}</router-link>
                </h4>
                <strong>$ {{ product.price }}</strong>
                <p class="card-text">
                    <strong>{{ product.brand }}</strong>
                </p>
                <p class="mt-4"><strong>Rating:</strong>{{ product.rating }}/5</p>
                <p class="card-text">{{ product.description.slice(0, 200) }}...</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
};
</script>

<style></style>
