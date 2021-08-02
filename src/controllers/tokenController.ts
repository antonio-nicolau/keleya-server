import * as jwt from 'jsonwebtoken'
import { Request, response } from 'express'

const jwtSecret = '0.rfyj3n9nzh'

export function createToken(id: number, email: string): string {
    const token = jwt.sign({ id: id, email: email }, jwtSecret)
    return token
}

export function getTokeFromHeader(req: Request): string {
    const token = req.headers.token;
    if (typeof token === 'undefined')
        return null
    return token.toString();
}

export function isTokenValid(token: string):boolean {
   let res = false
    jwt.verify(token, jwtSecret, (err, decode) => {
        if (!err) 
            res = true
    })
    return res
}