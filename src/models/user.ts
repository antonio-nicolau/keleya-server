import { DataTypes, Model } from "sequelize";
import { db } from "../database";
import { IUser, UserCreationAtributes } from "./IUser";

export class User extends Model<IUser, UserCreationAtributes>{
    id: number;
    name: string;
    email: string;
    password: string;
    babyBirthDate: Date;
    onboardingDone: boolean;
    acceptPrivatePolicy: boolean;
    acceptTermConditions: boolean;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    babyBirthDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    onboardingDone: {
        type: DataTypes.BOOLEAN,
    },
    acceptPrivatePolicy: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acceptTermConditions: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    tableName: "users",
    sequelize: db,
    timestamps: false,
})

User.sync();