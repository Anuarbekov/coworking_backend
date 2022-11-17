import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ignoreElements } from "rxjs";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFormRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: '1ju2c78ounx8u3iqsyo8fn43qec4onu3a2ho4c83qcru2nicp9ruiqedjeisg5g85'
        })
    }
}