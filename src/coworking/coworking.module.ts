import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RolesGuard } from 'src/auth/role/roles.guard';
import { CoworkingController } from './coworking.controller';
import { CoworkingService } from './coworking.service';
import { HiddenGuard } from 'src/auth/role/guards/hidden.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule],
  controllers: [CoworkingController],
  providers: [CoworkingService, JwtService]
})
export class CoworkingModule {}
