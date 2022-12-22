import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HiddenGuard } from './role/guards/hidden.guard';
import { BlockStrategy } from './strategy';

@Module({
  imports: [PrismaModule, JwtModule.register({}), UserModule],
  controllers: [AuthController],
  providers: [AuthService, BlockStrategy, HiddenGuard, UserService]
})

export class AuthModule {}
