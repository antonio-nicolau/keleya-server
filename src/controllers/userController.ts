import { hash } from 'bcrypt';
import { createToken, isTokenValid } from './tokenController';
import { User } from '../models/user';

class UserController {
    private readonly _saltRounds = 12

    async createUser(params: any) {
        const password = await hash(params.password, this._saltRounds);
        params.password = password;

        const response = await User.findOne({ where: { email: params.email } });

        if (response != null)
            throw new Error("User already exists");
        else {
            const user = await User.create(params);
            return user;
        }
    }

    async updateUser(user:any,token:string) {
        
        if (token != null && isTokenValid(token)) {
            const password = await hash(user.password, this._saltRounds);
            user.password = password;
            await User.update(user, { where: { id: user.id } });

            const token = createToken(user.id, user.email);
            return token;
        } else
            throw new Error("Unauthorized user");
    }
}

export default UserController;