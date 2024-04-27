import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ProfileTypeEnum } from "../entities/profile.entity";

export class CreateProfileDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEnum(ProfileTypeEnum)
    type: ProfileTypeEnum;
}
