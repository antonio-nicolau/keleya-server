import { check } from "express-validator";

export const userRule = {
    forSignIn: [
        check('email')
            .notEmpty()
            .isEmail()
            .withMessage('Invalid email'),
        check('password')
            .notEmpty()
            .withMessage('invalid password')
    ],
    forSignup: [
        check('email')
            .notEmpty()
            .isEmail()
            .withMessage('Invalid email'),
        check('password')
            .notEmpty()
            .isLength({ min: 5 })
            .withMessage('invalid password'),
        check('name')
            .notEmpty()
            .isLength({ min: 2 })
            .withMessage('insert a valid name')
    ]
}