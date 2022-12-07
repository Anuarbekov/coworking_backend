import { IsBoolean, IsDate, IsMilitaryTime, IsNotEmpty, IsNumber } from "class-validator"

export class EventDto{
    title: string

    description: string
    
    @IsBoolean()
    is_approved: boolean

    @IsBoolean()
    is_passed: boolean

    @IsDate()
    start_time: Date

    @IsDate()
    end_time: Date

    @IsNumber()
    userId: number

    @IsNumber()
    roomId: number

}