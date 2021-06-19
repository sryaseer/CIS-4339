<template>
    <div class="homepage">
        <Navbar />
        <h3 class="display-4">Welcome {{ getAppUser.firstName }} !</h3>

        <!-- Marketplace Card menu -->
        <div class="container">
            <div class="row">
                <div class="card shadow" style="width: 18rem;">
                    <img class="card-img-top" src="@/assets/dogecoin.png" />
                    <div class="card-body">
                        <h5 class="card-title"><b>Dogecoin</b></h5>
                        <p class="card-text">Dogecoin features the face of the Shiba Inu dog from the "Doge" meme as its logo and namesake.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Current Price: $0.3903</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-success">More Info</button>
                        <button class="ml-4 btn btn-warning" onclick="alert('Purchase has been made!')">Quick Buy</button>
                    </div>
                </div>
                <div class="card ml-2 shadow" style="width: 18rem;">
                    <img class="card-img-top" src="@/assets/bitcoin.png" />
                    <div class="card-body">
                        <h5 class="card-title"><b>Bitcoin</b></h5>
                        <p class="card-text">Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Current Price: $58,430.33</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-success">More Info</button>
                        <button class="ml-4 btn btn-warning" onclick="alert('Purchase has been made!')">Quick Buy</button>
                    </div>
                </div>
                <div class="card ml-2 shadow" style="width: 18rem;">
                    <img class="card-img-top" src="@/assets/eth.png" />
                    <div class="card-body">
                        <h5 class="card-title"><b>Ethereum</b></h5>
                        <p class="card-text">Ethereum is a decentralized, open-source blockchain with smart contract functionality.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Current Price: $3,134.59</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-success">More Info</button>
                        <button class="ml-4 btn btn-warning" onclick="alert('Purchase has been made!')">Quick Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from './Navbar.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Homepage',
    created() {
        document.title = 'Home Page';
    },
    components: {
        Navbar
    },
    data() {
        return {
            findPerson: {
                firstName: null,
                lastName: null,
                lastLogin: null,
                email: null
            }
        };
    },
    computed: {
        //obtain any store information from the get method
        ...mapGetters(['getAppUser'])
    },
    methods: {}
};
</script>
