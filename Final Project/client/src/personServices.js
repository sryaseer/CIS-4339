import axios from 'axios';
const url = 'http://localhost:3000/';

class PersonServices {
    //login
    static login(person) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(`${url}login`, { person });
                const data = res.data;

                if (data.error === 'Invalid login details') {
                    reject('Invalid login details');
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(`Invalid Credentials.\n Please try again`);
            }
        });
    }
    //register
    static register(person) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(`${url}register`, { person });
                const data = res.data;
                resolve(data);
            } catch (error) {
                reject(`Unable to register new person\n${error}`);
            }
        });
    }
    //override any information stored on the previously existing person in db
    static update(person) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(`${url}persons/${person._id}`, { person });
                const data = res.data;
                resolve(data);
            } catch (error) {
                reject(`Unable to update Account information\n${error}`);
            }
        });
    }
    //delete the found person from the db based on their id
    static delete(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.delete(`${url}persons/${id}`);
                const data = res.data;
                resolve(data);
            } catch (error) {
                reject(`Unable to delete person\n${error}`);
            }
        });
    }
    //search in the db for entry that matches from the search page
    static findPerson(person) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(`${url}search`, { person });
                const data = res.data;
                resolve(data);
            } catch (error) {
                reject(`Unable to find the account\n${error}`);
            }
        });
    }
}

export default PersonServices;
