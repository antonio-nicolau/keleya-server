import AuthController from '../../src/controllers/authController';
import { User } from '../../src/models/user';

describe("SignIn User",()=>{
    const authController = new AuthController();

    const user = {
        email: `joyce1627864175133@gmail.com`,
        password: "testpassword",
    }

    it("Should be able to sign in",async()=>{
        const response = await authController.signIn(user);

        expect(response).toBeInstanceOf(User);
        expect(response).toHaveProperty("id");
        expect(response).toHaveProperty("babyBirthDate");
    });

    it("Should not be able to sign in",async()=>{
        user.password = "any single password";
        try {
            await authController.signIn(user);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe("Email or password incorrect");
        }
    });
});