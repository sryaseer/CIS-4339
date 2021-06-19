<template>
    <div class="container w-50 shadow p-3 mb-5 mt-5 bg-white rounded">
        <h5 class="h4 font-weight-bold text-primary">Please Login to access the website</h5>
        <!-- form starts here -->
        <b-form @submit.prevent="login">
            <div class="container w-75 pt-2">
                <div class="form-group row">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email: </label>
                    <div class="col-sm-10">
                        <b-form-input id="inputEmail" v-model="person.email" placeholder="Email Address" type="email" required autofocused> </b-form-input>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password:</label>
                    <div class="col-sm-10">
                        <b-form-input id="inputPassword" v-model="person.password" placeholder="Password" type="password" required autofocused> </b-form-input>
                    </div>
                </div>

                <button class="btn btn-md btn-success btn-inline p-2" type="submit">Login</button>
            </div>
        </b-form>
        <p v-if="status" class="danger font-italic text-danger text-center">{{ status }}</p>
        <div class="mt-2">
            Don't have an account?
            <router-link to="/register">Sign Up!</router-link>
        </div>
    </div>
</template>

<script>
import personServices from '../personServices';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Login',
    created() {
        document.title = 'Login Page';
    },
    data() {
        return {
            person: {
                email: null,
                password: null
            },
            status: null
        };
    },
    methods: {
        ...mapActions(['setAppUser']),
        async login() {
            try {
                personServices
                    .login(this.person)
                    .then(user => {
                        this.status = null;
                        const appUser = {
                            //take all the information found about the user and store it into appUser which is a Store
                            firstName: user.findPerson.firstName,
                            lastName: user.findPerson.lastName,
                            email: user.findPerson.email,
                            token: user.findPerson.tokens[0].token
                        };
                        this.setAppUser(appUser); //send out info of appUser to the store of set method
                        this.$router.push('Homepage');
                    })
                    .catch(error => {
                        this.status = error;
                    });
            } catch (error) {
                this.status = error;
            }
        }
    },
    computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    border: 1px solid #6065ff;
    padding: 30px;
    border-radius: 5px;
}
</style>
