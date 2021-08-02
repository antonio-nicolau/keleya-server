import { createToken, isTokenValid } from '../../src/controllers/tokenController';

describe("Token Controller", () => {

    let myToken:string;

    const user = {
        id: 5,
        email: `joyce1627864175133@gmail.com`,
        password: "testpassword",
    }

    it("Should generate a new token",  () => {
        const { id, email } = user;
        myToken = createToken(id, email);

        const isToken = isTokenValid(myToken);
        expect(isToken).toBe(true);
    });

    it("Validate valide token",  () => {
        const isToken = isTokenValid(myToken);
        expect(isToken).toBe(true);
    });

    it("Validate invalid token",()=>{
        const isToken = isTokenValid("");
        expect(isToken).toBe(false);
    });
});