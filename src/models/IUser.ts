import { Optional } from "sequelize/types";

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    babyBirthDate: Date;
    onboardingDone: boolean;
    acceptPrivatePolicy: boolean;
    acceptTermConditions: boolean;
}

export interface UserCreationAtributes extends Optional<IUser, 'id'> { }
