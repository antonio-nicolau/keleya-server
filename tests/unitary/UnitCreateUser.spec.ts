
import UserController from '../../src/controllers/userController';
import { User } from '../../src/models/user';

describe("Unitary Test - Create User", () => {
    const userController = new UserController()

    it("Unitary Test -> Should be able to create a new user", async () => {
        const user = {
            name: `test${Date.now()}`,
            email: `joyce${Date.now()}@gmail.com`,
            password: "testpassword",
            babyBirthDate: new Date,
            onboardingDone: true,
            acceptPrivatePolicy: true,
            acceptTermConditions: true
        }
        const response = await userController.createUser(user);

        expect(response).toBeInstanceOf(User);
        expect(response).toHaveProperty('id');
    })

    it("Unitary Test -> Should be able to create a new user", async () => {
        //This user already exist
        const user = {
            name: `test${Date.now()}`,
            email: `joyce1627864175133@gmail.com`,
            password: "testpassword",
            babyBirthDate: new Date,
            onboardingDone: true,
            acceptPrivatePolicy: true,
            acceptTermConditions: true
        }

        try {
            const response = await userController.createUser(user);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);  
            expect(error.message).toBe("User already exists"); 
        }
    })
});