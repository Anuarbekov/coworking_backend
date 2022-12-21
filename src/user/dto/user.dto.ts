import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';
export class UserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'Почтовый адрес' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '123456789', description: 'Пароль юзера' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'Kairat', description: 'Имя юзера' })
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ example: 'Nurtas', description: 'Фамилия юзера' })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ example: 'ADMIN', description: 'Роль юзера' })
  @IsNotEmpty()
  role: string;

  @ApiProperty({ example: '+77775355025', description: 'Номер юзера' })
  @IsPhoneNumber('KZ')
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'kairat_nurtas', description: 'Телеграм айди юзера' })
  @IsString()
  telegram: string;
}
