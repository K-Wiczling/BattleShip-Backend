import bcrypt from 'bcrypt'
import express from "express";
import { body, validationResult } from 'express-validator';
import { db } from '../../db/db-credential.js';

// Registartion
const registerRouter = express.Router();

registerRouter.use(
    "/register",
    body('email').isEmail().normalizeEmail(),
    body('name').trim().isAlphanumeric(),
    body('password').isLength({ min: 10 }),
    (req, res) => {
        console.log(req);
        // Checking for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Deconstruct request to individual constants
        const { email, name, password } = req.body;

        // Bycrypt operations
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        // Try to add user to the database
        db.transaction(trx => {
            trx.insert({
                hash: hash,
                email: email
            })
                .into('login')
                .returning('email')
                .then(loginEmail => {
                    return trx('users')
                        .returning('*')
                        .insert({
                            email: loginEmail[0].email,
                            name: name,
                        })
                        .then(user => {
                            res.json(user[0]);
                        })
                })
                .then(trx.commit)
                .catch(trx.rollback)
        })
        .catch(err => res.status(400).json('unable to register'))
    });

export default registerRouter;