const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const User = require('./models/User'); //Database Schema for Blog
const Blog = require('./models/Blog'); //Database Schema for User
const authenticateUser = require('./middlewares/authenticateUser');

const router = express();

/* Connection to MongoDB Database */
mongoose
    .connect(
        'mongodb+srv://rizz:yaseer@cis3368.rcivk.mongodb.net/clubpenguin?authSource=admin&replicaSet=atlas-n1fhqa-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',

        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => {
        console.log('Connected to MongoDB - Collection Name: clubpenguin');
    })
    .catch((err) => {
        console.log(err);
    });

/* server config */
const PORT = 3000;
router.listen(PORT, () => {
    console.log(`Server started listening on port: ${PORT}`);
    console.log('\x1b[36m%s\x1b[0m', 'Link: http://localhost:3000/');
});

/* middlewares */
router.use(
    express.urlencoded({
        extened: true,
    })
);
router.use(express.static('public'));
router.set('view engine', 'ejs');

/* Cookie Session, got from https://www.npmjs.com/package/cookie-session */
router.use(
    cookieSession({
        keys: ['randomStringASyoulikehjudfsajk'],
    })
);

/* Routing for different front-end sites */
router
    .get('/', (req, res) => {
        res.render('login');
    })
    .get('/register', (req, res) => {
        res.render('register');
    })
    .get('/home', authenticateUser, async (req, res) => {
        const homeBlogs = await Blog.find({
            firstName: req.session.user.firstName,
        });
        res.render('home', {
            user: req.session.user,
            blogs: homeBlogs,
        });
    })
    .get('/wall', authenticateUser, async (req, res) => {
        const allBlogs = await Blog.find();
        res.render('wall', {
            user: req.session.user,
            blogs: allBlogs,
        });
    })
    .get('/delete/:id', authenticateUser, (req, res) => {
        const { id } = req.params;
        Blog.deleteOne({ _id: id })
            .then(() => {
                res.redirect('/home');
            })
            .catch((err) => console.log(err));
    })
    .get('/edit/:id', authenticateUser, async (req, res) => {
        const { id } = req.params;
        const getData = await Blog.findOne({ _id: id });
        res.render('editBlog', { blog: getData, user: req.session.user });
    })
    .get('/searchBlog', authenticateUser, async (req, res) => {
        try {
            const searchingUser = await Blog.find({ email: req.query.search });
            var returnSearch = req.query.search;
            res.render('searchBlog', {
                searchingUser: searchingUser[0],
                user: req.session.user,
                blogs: searchingUser,
                returnSearch: returnSearch,
            });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });

/* Logout Route w/ end of Session*/
router.get('/logout', authenticateUser, (req, res) => {
    req.session.user = null;
    res.redirect('/');
});

/* Routing for POST*/
router
    .post('/login', async (req, res) => {
        const { email, password } = req.body;

        const findUser = await User.findOne({
            email,
        });

        if (!findUser) {
            res.send('Invalid Email Address or Account does not Exist!');
            return;
        }

        const doesPasswordMatch = await bcrypt.compare(password, findUser.password);

        if (!doesPasswordMatch) {
            res.send('Invalid Password');
            return;
        }

        /* Contains the information of the user while in session */
        req.session.user = findUser;

        res.redirect('/home');
    })
    .post('/register', async (req, res) => {
        const { email, password } = req.body;

        const doesUserExistAlready = await User.findOne({
            email,
        });

        if (doesUserExistAlready) {
            res.send('A user with that email already exits please try another one!');
            return;
        }

        /* password encrpytion from https://www.npmjs.com/package/bcrypt*/
        const hashed = await bcrypt.hash(password, 8);

        const createUser = new User({
            email: req.body.email,
            password: hashed,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nickname: req.body.nickName,
            birthday: req.body.birthday,
        });

        createUser
            .save()
            .then(() => {
                res.send('Registered Account!');
                return;
            })
            .catch((err) => console.log(err));
    });

/* Compose Route using for form on /compose page*/
router.post('/compose', (req, res) => {
    const writeBlog = new Blog({
        firstName: req.session.user.firstName,
        title: req.body.title,
        content: req.body.content,
        email: req.session.user.email,
    });
    writeBlog
        .save()
        .then(() => {
            res.redirect('/home');
        })
        .catch((err) => console.log(err));
});
