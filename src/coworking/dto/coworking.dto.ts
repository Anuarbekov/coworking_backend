import { IsNotEmpty, IsString } from "class-validator";

export class CoworkingDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    address: string
    
}