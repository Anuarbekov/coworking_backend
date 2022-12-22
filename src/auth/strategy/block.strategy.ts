import { Injectable, Request, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class BlockStrategy extends PassportStrategy(Strategy, 'block'){
    constructor(private prisma: PrismaService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        })
    }
    async validate(payload:{
        sub: number,
        email: string,
        role: string
    }, @Request() req){
        console.log(payload);
        // const user = await this.prisma.user.findFirst({
        //     where: {
        //         email: payload.email
        //     }
        // })
        console.log("In Block Guard");
        // if(!user)  throw new UnauthorizedException();
        // req.user = user;
        // return payload;
        return payload;

    }
}