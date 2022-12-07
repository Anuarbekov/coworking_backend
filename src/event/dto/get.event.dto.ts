import {IsBoolean, IsDate, IsNotEmpty, IsNumber } from "class-validator"

export class GetEventDto{

    @IsBoolean()
    is_approved: boolean

    @IsBoolean()
    is_passed: boolean

    @IsNotEmpty()
    @IsDate()
    start_time: Date

    @IsNotEmpty()
    @IsDate()
    end_time: Date

    @IsNumber()
    roomId: number
}