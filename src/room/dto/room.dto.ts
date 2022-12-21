import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';
export class RoomDto {
  @ApiProperty({ example: 'С202 / Тарих', description: 'Тайтл комнаты' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: '2 этаж Тарих кабинет',
    description: 'Описание комнаты',
  })
  description?: string;

  @ApiProperty({ example: 5000, description: 'Цена' })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    example: 20,
    description: 'Макс кол-во участников в комнате',
  })
  @IsNumber()
  @IsNotEmpty()
  max_people_num: number;

  @ApiProperty({
    example: 2,
    description: 'Айди комнаты',
  })
  @IsNumber()
  @IsNotEmpty()
  coworkingId: number;
}
