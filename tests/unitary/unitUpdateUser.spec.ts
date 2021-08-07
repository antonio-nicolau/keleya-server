import { isTokenValid } from "../../src/controllers/tokenController";
import UserController from "../../src/controllers/userController";

describe("Unitary Test - UPDATE USER", () => {
    const userController = new UserController()

    const user = {
        id:5,
        name: `test${Date.now()}`,
        email: `joyce1627864175133@gmail.com`,
        password: "testpassword",
        babyBirthDate: new Date,
        onboardingDone: true,
        acceptPrivatePolicy: true,
        acceptTermConditions: true
    }


    it("Unitary Test -> Should be able to update user", async () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoiYWRpbHNvbkBnbWFpbC5jb20iLCJpYXQiOjE2Mjc2ODIxNzl9.mOEbQENHdkcyIePqzhNxwwGqBipQGth-nb0tTec7ZPE";
        const response = await userController.updateUser(user, token);

        const isValidToken = isTokenValid(response);
        expect(response != null).toBe(true);
        expect(isValidToken).toBe(true);
    });

    it("Unitary Test -> Should not be able to update user", async () => {
        const token = "";
        let response;
        try {
            response = await userController.updateUser(user, token);
        } catch (error) {
            const isValidToken = isTokenValid(response);
            expect(error.message).toBe("Unauthorized user");
            expect(isValidToken).toBe(false);
        }
    });
})