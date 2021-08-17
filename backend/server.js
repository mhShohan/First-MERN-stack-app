//dependecies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//internal imports
const userRoute = require('./routes/users');
const exersizeRoute = require('./routes/exersize');

require('dotenv').config();

const app = express();
const PORT = 5000;

//middleweres
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
const conection = mongoose.connection;
conection.once('open', () => {
    console.log('Mongodb Connected');
});

//routes
app.use('/users', userRoute);
app.use('/exersizes', exersizeRoute);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
