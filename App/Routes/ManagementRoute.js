const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/HTML/Faculty/management.html')));

router.get('/', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.sendFile(__dirname + '/HTML/Faculty/management.html');
});



module.exports = router
