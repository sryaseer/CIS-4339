<template>
    <div class="Person ">
        <Navbar />

        <div class="container shadow p-3 mb-5 bg-white rounded ">
            <!-- This is the search form -->
            <div class="container jumbotron w-75 shadow p-3 mb-5 mt-1 bg-white rounded">
                <h1 class="h4 mb-2 font-weight-bold text-info">
                    <img class="img-responsive" src="@/assets/magnifying-glass-icon.png" />
                    Let's search for a User!
                </h1>
                <!-- start of the form -->
                <b-form>
                    <div class="form-group row">
                        <label for="inputSearchEmail" class="col-sm-3 col-form-label text-right">Email: </label>
                        <div class="col-sm-8">
                            <b-form-input id="inputSearchEmail" class="w-75" v-model="getPerson.email" placeholder="Email Address" type="email" required autofocused>
                            </b-form-input>
                        </div>
                    </div>
                    <b-button class="btn btn-md btn-info mt-4 btn-sm" pill @click="search" variant="info" v-if="editStatus === 'Search'">Search </b-button>
                </b-form>
            </div>
            <!-- This is the update form -->
            <div class="container jumbotron w-75 shadow p-3 mb-5 mt-1 bg-white rounded">
                <h1 class="h5 mb-2 font-weight-bold text-info">Update the User Information</h1>
                <!-- start of the form -->
                <b-form>
                    <div class="form-group row">
                        <label for="inputUpdateEmail" class="col-sm-3 col-form-label text-right">Email: </label>
                        <div class="col-sm-8 mt-1">
                            <b-form-input id="inputUpdateEmail" class="w-75" v-model="getPerson.email" placeholder="Email Address" type="email" required autofocused>
                            </b-form-input>
                        </div>
                        <label for="inputFirstName" class="col-sm-3 col-form-label text-right">First Name: </label>
                        <div class="col-sm-8 mt-1">
                            <b-form-input id="inputFirstName" class="w-75" v-model="getPerson.firstName" placeholder="First name" required autofocused> </b-form-input>
                        </div>
                        <label for="inputLastName" class="col-sm-3 col-form-label text-right">Last Name: </label>
                        <div class="col-sm-8 mt-1">
                            <b-form-input id="inputLastName" class="w-75" v-model="person.lastName" placeholder="Last name" required autofocused> </b-form-input>
                        </div>
                    </div>
                    <b-button class="btn btn-md btn-info mt-4 btn-sm ml-4">Update</b-button>
                    <b-button class="btn btn-md btn-danger mt-4 btn-sm ml-4" pill @click="submitDelete" v-if="editStatus === 'Search'">Delete</b-button>
                </b-form>
            </div>
            <p v-if="status" class="danger font-italic text-danger text-center">{{ status }}</p>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import personServices from '../personServices';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Person',
    created() {
        document.title = 'Search for User';
    },
    data() {
        return {
            editStatus: 'Search',
            person: {
                firstName: null,
                lastName: null,
                email: null
            },
            status: null
        };
    },
    methods: {
        ...mapActions(['setPerson']),
        async search() {
            try {
                personServices
                    .findPerson(this.person.email)
                    .then(foundPerson => {
                        console.log(foundPerson); //found
                        this.setPerson(this.foundPerson);
                        if (Object.keys('foundPerson').includes('error')) {
                            this.status = foundPerson.error;
                            this.editStatus = 'search';
                        } else if (foundPerson.name === 'MongoError') {
                            this.status = `${foundPerson.name} ${JSON.stringify(foundPerson.keyValue)}`;
                            this.editStatus = 'search';
                        } else {
                            this.status = null;
                            this.foundPerson = Object.assign({}, foundPerson);

                            this.editStatus = 'Update';
                        }
                        console.log(foundPerson.findPerson);
                    })
                    .catch(error => {
                        this.status = error;
                    });
            } catch (error) {
                this.status = error;
            }
        },
        async update() {
            try {
                personServices
                    .update(this.person.email)
                    .then(foundPerson => {
                        console.log(foundPerson.findPerson);
                        if (Object.keys('foundPerson').includes('error')) {
                            this.status = foundPerson.error;
                            this.editStatus = 'search';
                        } else if (person.name === 'MongoError') {
                            this.status = `${foundPerson.name} ${JSON.stringify(foundPerson.keyValue)}`;
                            this.editStatus = 'search';
                        } else {
                            this.status = null;
                            this.person = Object.assign({}, foundPerson);
                            this.setPerson(this.person);

                            this.editStatus = 'Update';
                        }
                        console.log(foundPerson.findPerson);
                    })
                    .catch(error => {
                        this.status = error;
                    });
            } catch (error) {
                this.status = error;
            }
        },
        async submitDelete() {
            personServices
                .delete(this.person._id)
                .then(result => {
                    console.log(result);
                    this.person = {
                        firstName: null,
                        lastName: null,
                        lastLogin: null,
                        email: null,
                        password: null
                    };
                    this.$router.push('/');
                })
                .catch(error => {
                    this.status = error;
                });
        }
    },
    components: {
        Navbar
    },
    computed: {
        ...mapGetters(['getPerson'])
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
    border-radius: 50%;
    padding: 10px;
    font-size: 16px;
    margin: 4px 2px;
}

.container {
    border: 1px solid #64cc6c;
    padding: 30px;
    border-radius: 5px;
}
</style>
