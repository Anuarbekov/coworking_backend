import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(private prisma: PrismaService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: '1ju2c78ounx8u3iqsyo8fn43qec4onu3a2ho4c83qcru2nicp9ruiqedjeisg5g85'
        })
    }
    async validate(payload:{
        sub: number,
        email: string,
        role: string
    }){
        const user = await this.prisma.user.findFirst({
            where: {
                id: payload.sub
            }
        })
        if(!user) return null;
        return payload;

    }
}