import { IsBoolean, IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';
export class EventDto {
  @ApiProperty({ example: 'Бизнес митинг', description: 'Тайтл ивента' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Бизнес митинг с компанией Google',
    description: 'Описание ивента',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'true', description: 'is_approved' })
  @IsBoolean()
  is_approved: boolean;

  @ApiProperty({ example: 'false', description: 'is_passed' })
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

  @ApiProperty({ example: '1', description: 'Айди юзера' })
  @IsNumber()
  userId: number;

  @ApiProperty({ example: '2', description: 'Айди комнаты' })
  @IsNumber()
  roomId: number;
}
