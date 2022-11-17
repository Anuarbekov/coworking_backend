import { IsAlpha, IsEmail, IsMobilePhone, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator"

export class RegisterDto{
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

export class LoginDto{

    @IsNotEmpty()
    @IsNotEmpty()
    emailOrPhone: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}