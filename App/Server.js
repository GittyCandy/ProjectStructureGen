const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');

const AdminDashBoardRoute = require('./Routes/AdminDashBoardRoute.js');

const { logFileMiddleware, dataMiddleware } = require('./MiddleWares/FileMiddleWare.js'); // Modularized middlewares
const upload = require('./MiddleWares/UploadMiddleWare.js');


// npm install express, csv-parser, body-parser, bcryptjs, express-session, multer, dotenv, fs

// Create an Express app
const app = express();
const port = 3040;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('Public'));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

// Static file routes
app.get('/', (req, res) => res.sendFile(__dirname + '/Public/HTML/index.html'));

/*---------------*/

const { spawn } = require('child_process');

app.use('/upload', upload);

// Routes
app.use("/Admin_Dashboard", AdminDashBoardRoute);

app.listen(port, () => {
    console.clear();
    process.stdout.write('\x1Bc');
    console.log('--------------------------------------------');
    console.log(`Server running on http://localhost:${port}`);
});

