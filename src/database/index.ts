require('dotenv').config()
import { Sequelize } from "sequelize";

export const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: "mysql",
    logging:false,
})

db.authenticate();