
import UserController from '../../src/controllers/userController';
import { User } from '../../src/models/user';
import request from 'supertest';
import app from '../../src/app';

describe("Integration Test - Create User", () => {
    const userController = new UserController()
    const user = {
        name: `test${Date.now()}`,
        email: `joyce${Date.now()}@gmail.com`,
        password: "testpassword",
        babyBirthDate: new Date,
        onboardingDone: true,
        acceptPrivatePolicy: true,
        acceptTermConditions: true
    }

    it("Integration Test -> Should be able to create a new user", async () => {
        const response = await request(app)
        .post("/api/users")
        .send(user);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
    })

    it("Integration Test -> Should not be able to create a new user", async () => {
        const response = await request(app)
        .post("/api/users")
        .send(user);

        //This user already exist
        user.email = 'joyce1627864175133@gmail.com';
        user.password = 'testpassword';

        expect(response.status).toBe(402);
        expect(response.body).toBe('User already exists');
    })
});