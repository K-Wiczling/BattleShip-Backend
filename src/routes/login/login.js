import bcrypt from 'bcrypt'
import express from "express";
import { body, validationResult } from 'express-validator';
import { db } from '../../db/db-credential.js';

// Login
const loginRouter = express.Router();

loginRouter.use(
    "/login",
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 10 }),
    (req, res) => {

        // Checking for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Deconstruct request to individual constants
        const { email, password } = req.body;

        res.send('woriking on it..')
    });


export default loginRouter;