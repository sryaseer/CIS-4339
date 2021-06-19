const { Logger } = require('mongodb');

const express = require('express'),
    cors = require('cors'),
    logger = require('morgan'),
    personRouter = require('./router/router'),
    PORT = process.env.PORT || 3000;
require('./mongooseConnection');

const app = express();
app.use(logger('combined'));
app.use(cors());
app.use(express.json());
app.use(personRouter);

app.listen(PORT, () => {
    console.log(`Server started listening on port: ${PORT}`);
    console.log('\x1b[36m%s\x1b[0m', 'Link: http://localhost:3000/');
});
