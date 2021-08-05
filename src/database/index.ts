import { Sequelize } from "sequelize";

export const db = new Sequelize({
    database: "keleya",
    username: "root",
    password: "",
    dialect: "mysql",
    logging:false,
})

db.authenticate();