import request from 'supertest';
import app from '../../src/app';
import { isTokenValid } from '../../src/controllers/tokenController';

describe("Integration Test - sign in", () => {
    const user = {
        email: 'joyce1627864175133@gmail.com',
        password: "testpassword",
    }

    it("Integration Test -> Should be able to sign in", async () => {
        const response = await request(app)
        .post("/api/users/auth")
        .send(user);

        expect(response.status).toBe(200);
        const isToken = isTokenValid(response.headers.token);
        expect(isToken).toBe(true);
        const dataResponse = response.body;
        expect(dataResponse).toHaveProperty("name");
        expect(dataResponse).toHaveProperty("babyBirthDate");
    });

    it("Integration Test -> Should not be able to sign in", async () => {
        user.password = 'anypasswordtest';
        const response = await request(app)
        .post("/api/users/auth")
        .send(user);

        expect(response.status).toBe(402);
        expect(response.body).toBe("Email or password incorrect");
    });
    
});