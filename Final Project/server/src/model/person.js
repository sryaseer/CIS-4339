const mongoose = require('mongoose'),
    validator = require('validator'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs');

const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            } //This is a server-side validation to see if the email format is valid
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot be "password"');
            } //This is a server-side validation to see if the email format is valid, also if password == "password"
        },
    },
    lastLogin: {
        type: String,
        required: false,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
});

//middleware Area- before anything happens
personSchema.pre('save', async function (next) {
    const person = this;
    if (person.isModified('password')) {
        person.password = await bcrypt.hash(person.password, 8);
    }
    next();
}); //checks the pre-saved password and changes it with a hash crypt

//generate a token based on the parameters of id, name, and email
personSchema.methods.generateAuthToken = async function () {
    const person = this;
    const token = jwt.sign(
        {
            _id: person._id,
            name: person.lastName,
            email: person.email,
        },
        'secret'
    );
    person.tokens = person.tokens.concat({ token });
    await person.save();
    return token;
}; //generate a token

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
