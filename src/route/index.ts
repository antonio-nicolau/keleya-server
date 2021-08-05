import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import AuthController from "../controllers/authController";
import { createToken, getTokeFromHeader } from "../controllers/tokenController";
import UserController from "../controllers/userController";
import { userRule } from "../models/user.rule";

export const route = Router();

route.post('/api/users', userRule.forSignup, async (req: Request, res: Response) => {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(402).json(errors.array());

        const controller = new UserController();
        const user = await controller.createUser(req.body);
        
        const token = createToken(user.id, user.email);

        res.header({ token: token }).json({
            user: JSON.stringify(user),
        });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

route.patch('/api/users', userRule.forSignup, async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(402).json(errors.array());

        const token = getTokeFromHeader(req);
        const controller = new UserController();
        const response = await controller.updateUser(req.body, token);
        res.header({ token: response }).json({
            user: 'User updated',
        });
    } catch (error) {
        res.json({ msg: error.message });
    }
});


route.post('/api/users/auth', userRule.forSignIn, async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(402).json(errors.array());

        const auth = new AuthController();
        const user = await auth.signIn(req.body);

        const token = createToken(user.id, user.email);

        res.header({ token: token }).json({
            user: JSON.stringify(user),
        });
    } catch (error) {
        res.json({ msg: error.message });
    }
});
