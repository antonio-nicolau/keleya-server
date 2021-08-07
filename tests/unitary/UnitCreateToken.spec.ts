import { createToken, isTokenValid } from '../../src/controllers/tokenController';

describe("Unitary Test - Token Controller", () => {

    let myToken:string;

    const user = {
        id: 5,
        email: `joyce1627864175133@gmail.com`,
        password: "testpassword",
    }

    it("Unitary Test - Should generate a new token",  () => {
        const { id, email } = user;
        myToken = createToken(id, email);

        const isToken = isTokenValid(myToken);
        expect(isToken).toBe(true);
    });

    it("Unitary Test -> Validate valide token",  () => {
        const isToken = isTokenValid(myToken);
        expect(isToken).toBe(true);
    });

    it("Unitary Test -> Validate invalid token",()=>{
        const isToken = isTokenValid("");
        expect(isToken).toBe(false);
    });
});