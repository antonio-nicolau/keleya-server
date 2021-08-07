import { isTokenValid } from "../../src/controllers/tokenController";
import UserController from "../../src/controllers/userController";
import request from 'supertest';
import app from '../../src/app';

describe("Integration Test - UPDATE USER", () => {
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


    it("Integration Test -> Should be able to update user", async () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoiYWRpbHNvbkBnbWFpbC5jb20iLCJpYXQiOjE2Mjc2ODIxNzl9.mOEbQENHdkcyIePqzhNxwwGqBipQGth-nb0tTec7ZPE";
        const response = await request(app)
        .patch("/api/users")
        .set('token',token)
        .send(user);

        expect(response.status).toBe(200);
        expect(response.body).toBe('User updated');
        expect(response.headers.token  != null).toBe(true);
    });

    it("Integration Test -> Should not be able to update user", async () => {
        const token = "";
        const response = await request(app)
        .patch("/api/users")
        .set('token',token)
        .send(user);
        
        expect(response.status).toBe(402);
        expect(response.body).toBe("Unauthorized user");
    });
});