const express = require('express');
const mongoose = require('mongoose');
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();
require("./config/passport")(passport);

app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.static('public'));


//Set view 
app.set('view engine','ejs');

//Mongo connect
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err, "error"));

//Routes
const aboutRoute = require('./routes/About');
const backroomRoute = require('./routes/Backroom');
const dashboardRoute = require('./routes/Dashboard');
const homeRoute = require('./routes/Home');
const indexRoute = require('./routes/Index');
const loginRoute = require('./routes/Login');
const registerRoute = require('./routes/Register');
const uploadRoute = require('./routes/Upload');

app.use('/About', aboutRoute);
app.use('/Backroom', backroomRoute);
app.use('/Dashboard', dashboardRoute);
app.use('/Home', homeRoute);
app.use('/Index', indexRoute);
app.use('/Login', loginRoute);
app.use('/Register', registerRoute);
app.use('/Upload', uploadRoute);

app.use("/", require("./routes/Index"));
app.use("/users", require("./routes/users"));

//Port


const PORT = process.env.PORT || 4100;
app.listen(PORT, () => {
    console.log(`Music Fixer Running On Port ${PORT}`);
});