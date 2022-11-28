import { IsBoolean, IsDate, IsMilitaryTime, IsNotEmpty, IsNumber } from "class-validator"

export class EventDto{
    @IsNotEmpty()
    title: string

    description: string
    
    @IsBoolean()
    is_approved: boolean

    @IsDate()
    start_time: Date

    @IsDate()
    end_time: Date

    @IsNumber()
    month: number

    @IsDate()
    day: Date

    @IsNotEmpty()
    @IsNumber()
    userId: number

    @IsNotEmpty()
    @IsNumber()
    roomId: number

}