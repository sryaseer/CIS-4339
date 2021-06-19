const express = require('express'),
    personSchema = require('../model/person'),
    bcrypt = require('bcryptjs');

router = new express.Router();

// POST
router
    // registering an account
    .post('/register', async (req, res) => {
        console.log(req.body);
        const createPerson = new personSchema(req.body.person);
        createPerson
            .save()
            .then(() => {
                res.send('Registered Account!');
                res.send(createPerson);
                console.log('log:' + createPerson); //checking to see the register info, delete me
                return;
            })
            .catch((err) => {
                console.log(err);
                res.send(err);
            });
    })

    //Log in function
    .post('/login', async (req, res) => {
        try {
            const person = req.body.person;
            const email = person.email;
            const password = person.password;

            const findPerson = await personSchema.findOne({ email });
            if (!findPerson) {
                res.send({ error: 'Invalid login details' });
            }

            const doesPasswordMatch = await bcrypt.compare(password, findPerson.password);
            if (!doesPasswordMatch) {
                res.send({ error: 'Invalid login details' });
            }

            const token = await findPerson.generateAuthToken();
            res.send({ findPerson, token });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    })
    .post('/search', async (req, res) => {
        try {
            const findPerson = await personSchema.findOne(req.body.person);
            // console.log(findPerson); Works, was able to find person
            if (!findPerson) {
                res.send({ error: 'Invalid login details' });
            }
            res.send({ findPerson });
        } catch (error) {
            console.log(error);
            res.status(400).send();
        }
    });

//GET
//Retrieve All
router
    .get('/persons', async (req, res) => {
        try {
            const findPersons = await personSchema.find({});
            if (!findPersons) {
                return res.status(404).send();
            } else {
                res.send({ findPersons });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    })
    //Retrieve One
    .get('/persons/:id', async (req, res) => {
        try {
            const findPersons = await personSchema.findById(req.params.id);
            console.log(findPersons);
            if (!findPersons) {
                return res.status(404).send();
            } else {
                res.send({ findPersons });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });

//Delete Method
router.delete('/persons/:id', async (req, res) => {
    try {
        const deletePerson = await personSchema.findById(req.params.id);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.status(200).send(error);
    }
});
module.exports = router;
