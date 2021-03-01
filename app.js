const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./router/api.router');

const app = express();

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(5000, () => {
    console.log('App listen 5000');
});

// eslint-disable-next-line no-unused-vars
function _connectDB() {
    mongoose.connect('mongodb://localhost:27017/my_database', { useUnifiedTopology: true, useNewUrlParser: true });
    const { connection } = mongoose;
    connection.on('error', (error) => {
        console.log(error);
    });
}
