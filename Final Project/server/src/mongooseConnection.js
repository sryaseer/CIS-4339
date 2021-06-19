const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://rizz:yaseer@cis3368.rcivk.mongodb.net/final?authSource=admin&replicaSet=atlas-n1fhqa-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',

        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => {
        console.log('Connected to MongoDB - Collection Name: final');
    })
    .catch((err) => {
        console.log(err);
    });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
