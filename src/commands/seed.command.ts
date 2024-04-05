import { NestFactory } from "@nestjs/core";
import { profile } from "console";
import { AppModule } from "../app.module";
import { Profile, ProfileTypeEnum } from "../profile/entities/profile.entity";
import { ProfileService } from "../profile/profile.service";


async function bootstrap() { 
     const app = await NestFactory.createApplicationContext(AppModule);	
     // Todo :  Do What you want  
    const profileService = app.get(ProfileService);
    const profile = new Profile();
    profile.username = 'aymen';
    profile.type = ProfileTypeEnum.LinkedIn;
    await profileService.create(profile);
     
    await app.close();
    
}bootstrap();
