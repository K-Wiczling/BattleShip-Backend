import bcrypt from 'bcrypt'
import express from "express";
import { body, validationResult } from 'express-validator';

const registerRouter = express.Router();

// Registartion

registerRouter.use(
    "/register",
    body('email').isEmail(),
    body('password').isLength({ min: 10 }),
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // User.create({
        //     username: req.body.username,
        //     password: req.body.password,
        // }).then(user => res.json(user));

        const { email, name, password } = req.body;
        console.log(email);
        res.send(`registration of user ${name}: `, );
    });

export default registerRouter;


// // console.log(body);
// body('email').isAlphanumeric()
// console.log();


// bcrypt.hash(password, this.saltRounds).then(function (hash) {
//     // Store hash in your password DB.
//     // this.hash = hash;
//     // console.log(hash);
// });

// registerMessage = () => {
//     return 'Register succesfuly';
// }
