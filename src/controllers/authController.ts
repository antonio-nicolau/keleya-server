import { compare } from "bcrypt";
import { User } from "../models/user";

class AuthController {

    async signIn(params:any): Promise<any> {
        const user = await User.findOne({ where: { email: params.email } });

        if (user != null) {
            const hash = await compare(params.password, user.password);
            if (hash)
                return user;
            else
                throw new Error("Email or password incorrect");
        }
        else
            throw new Error("user not exist");
    }
}

export default AuthController;