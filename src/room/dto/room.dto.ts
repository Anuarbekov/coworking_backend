import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RoomDto{
    @IsNotEmpty()
    @IsString()
    title: string 

    description?: string

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsNumber()
    @IsNotEmpty()
    max_people_num: number

    @IsNumber()
    @IsNotEmpty()
    coworkingId: number
}