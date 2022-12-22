import { IsBoolean, IsString, IsNotEmpty, IsNumber } from 'class-validator';
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
    example: '2022-12-19T10:30:00',
    description: 'Время начала',
  })
  @IsString()
  start_time: string;

  @ApiProperty({
    example: '2022-12-19T10:30:00',
    description: 'Время окончания',
  })
  @IsString()
  end_time: string;

  @ApiProperty({ example: '1', description: 'Айди юзера' })
  @IsNumber()
  userId: number;

  @ApiProperty({ example: '2', description: 'Айди комнаты' })
  @IsNumber()
  roomId: number;
}
