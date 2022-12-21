import { IsBoolean, IsDate, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';
export class GetEventDto {
  @ApiProperty({ example: 'false', description: 'is_approved' })
  @IsBoolean()
  is_approved: boolean;

  @ApiProperty({ example: 'true', description: 'is_passed' })
  @IsBoolean()
  is_passed: boolean;

  @ApiProperty({
    example: 'Fri Mar 10 2006 09:00:00',
    description: 'Время начала',
  })
  @IsDate()
  start_time: Date;

  @ApiProperty({
    example: 'Fri Mar 10 2006 10:00:00',
    description: 'Время окончания',
  })
  @IsDate()
  end_time: Date;

  @ApiProperty({ example: '2', description: 'Айди комнаты' })
  @IsNumber()
  roomId: number;

  isDataHidden?: boolean;
}
