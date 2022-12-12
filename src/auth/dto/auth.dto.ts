import {IsNotEmpty, IsPhoneNumber, IsString } from "class-validator"


export class LoginDto{

    @IsNotEmpty()
    @IsNotEmpty()
    emailOrPhone: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}