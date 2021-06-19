import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        product: null
    },
    mutations: {
        SET_PRODUCT(state, product) {
            state.product = product;
        },
        SET_PRODUCTS(state, products) {
            state.products = products;
        }
    },
    actions: {
        getProducts({ commit }) {
            axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl').then(response => {
                commit('SET_PRODUCTS', response.data);
            });
        },

        getProduct({ commit }, productId) {
            axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${productId}.json`).then(response => {
                commit('SET_PRODUCT', response.data);
            });
        }
    },
    modules: {}
});
