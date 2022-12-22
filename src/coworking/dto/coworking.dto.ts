import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';
export class CoworkingDto {
  @ApiProperty({ example: 'Abylai', description: 'Имя коворкинга' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Абая 2', description: 'Адрес коворкинга' })
  address: string;
}
