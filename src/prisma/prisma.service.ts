import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources:{
                db: {
                    url: "postgresql://postgres:ma4abbat@localhost:5432/coworking?schema=public"
                }
            }
        })
    }
}
