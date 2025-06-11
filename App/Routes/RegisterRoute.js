const express = require("express");
const router = express.Router();
const path = require('path');
const db = require('../Config/DataBaseConfig.js');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/HTML/register.html'))
);

router.post('/', async (req, res) => {
    const { name, userid, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (name, userid, email, password) VALUES (?, ?, ?, ?)';
    db.query(query, [name, userid, email, hashedPassword], (err) => {
        if (err) {
            // On error (e.g., duplicate entry), redirect with a registration error message.
            res.redirect('/register?form=register&error=User%20Already%20Registerd');
        } else {
            // Registration successful; redirect to the login page.
            res.redirect('/login');
        }
    });
});

module.exports = router;
