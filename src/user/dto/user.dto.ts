import {IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class UserDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    firstname: string;

    lastname: string;

    @IsNotEmpty()
    role: string;

    @IsPhoneNumber('KZ')
    @IsNotEmpty()
    phone: string;

    @IsString()
    telegram: string;
}