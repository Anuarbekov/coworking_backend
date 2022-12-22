import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CoworkingController } from './coworking.controller';
import { CoworkingService } from './coworking.service';
import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  controllers: [CoworkingController],
  providers: [CoworkingService, JwtService]
})
export class CoworkingModule {}
