import bcrypt from 'bcrypt'
import express from "express";
import { body, validationResult } from 'express-validator';
import { db } from '../../db/db-credential.js';

// Login
const loginRouter = express.Router();

loginRouter.use(
    "/login",
    body('email').isEmail().normalizeEmail(),
    body('password').trim().escape().isLength({ min: 10 }),
    (req, res) => {

        // Checking for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Deconstruct request to individual constants
        const { email, password } = req.body;

        db.select('email', 'hash').from('login')
            .where('email', '=', email)
            .then(data => {

                bcrypt.compare(password, data[0].hash, function (err, result) {
                    // result == true
                    if (result) {
                        return db.select('*').from('users')
                            .where('email', '=', email)
                            .then(user => {
                                res.send('Welcome: ' + user[0].name)
                            })
                            .catch(err => res.status(400).json('unable to get user'))
                    } else {
                        res.status(400).json('wrong credentials')
                    }
                });
        
            })
            .catch(err => res.status(400).json('wrong credentials'))
    });


export default loginRouter;

