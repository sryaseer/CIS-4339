<template>
    <div class="container w-50 shadow p-3 mb-5 mt-5 bg-white rounded">
        <div>
            <h5 class="h4 font-weight-bold text-primary">Please Register to access the website</h5>

            <!-- form starts here -->
            <b-form @submit.prevent="register" class="form">
                <div class="container w-75 pt-2">
                    <label for="inputFirstName">First Name: </label>
                    <b-form-input id="inputFirstName" v-model="person.firstName" placeholder="First name" required autofocused> </b-form-input>

                    <label for="inputLastName" class="pt-1">Last Name: </label>
                    <b-form-input id="inputLastName" v-model="person.lastName" placeholder="Last name" required autofocused> </b-form-input>

                    <label for="inputEmail" class="pt-1">Email: </label>
                    <b-form-input id="inputEmail" v-model="person.email" placeholder="Email Address" type="email" required autofocused> </b-form-input>

                    <label for="inputPassword" class="pt-1">Password <small>(min 4 characters)</small>:</label>
                    <b-form-input id="inputPassword" v-model="person.password" placeholder="Password" type="password" required autofocused> </b-form-input>

                    <label for="inputConfPassword" class="pt-1">Confirm Password <small>(min 4 characters)</small>:</label>
                    <b-form-input id="inputConfPassword" v-model="ConfPassword" placeholder="Password" type="password" required autofocused> </b-form-input>

                    <p v-if="status" class="danger font-italic text-danger text-center">{{ status }}</p>
                    <button class="btn btn-md btn-success btn-inline p-2 mt-4" type="submit">Register</button>
                </div>
            </b-form>
        </div>
        <div class="mt-2">Already have an account? <router-link to="/login">Login in!</router-link></div>
    </div>
</template>

<script>
import personServices from '../personServices';

export default {
    name: 'Register',
    created() {
        document.title = 'Register Page';
    },
    data() {
        return {
            person: {
                firstName: null,
                lastName: null,
                lastLogin: null,
                email: null,
                password: null
            },
            status: null,
            ConfPassword: null
        };
    },
    methods: {
        async register() {
            if (this.ConfPassword === this.person.password) {
                try {
                    personServices
                        .register(this.person)
                        .then(newAccount => {
                            if (Object.keys('newAccount').includes('errors')) {
                                this.status = newAccount.errors.message;
                            } else if (newAccount.name === 'MongoError') {
                                this.status = `${newAccount.name} ${JSON.stringify(newAccount.keyValue)}`;
                            } else {
                                this.status = null;
                                console.log('Registration Successfull'); //delete me
                                this.$router.push('Login');
                            }
                        })
                        .catch(error => {
                            this.status = error;
                        });
                } catch (error) {
                    this.status = error;
                }
            } else {
                this.status = 'Password does not match';
            }
        }
    }
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
