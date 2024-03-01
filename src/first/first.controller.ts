import { Body, Controller, Get, Inject, Patch, Post } from '@nestjs/common';
import { FirstService } from './first.service';
import { AddFirstDto } from './dto/add-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';

@Controller('first')
export class FirstController {
  // On a besoin d'une dépendance qui a un Token FirstService
  constructor(@Inject(FirstService) private firstService: FirstService) {}
  @Get()
  sayHelloToVistors() {
    return this.firstService.sayHello();
  }
  @Post()
  onPost(@Body() addFirstDto: AddFirstDto) {
    console.log(addFirstDto instanceof AddFirstDto);

    return addFirstDto;
  }
  @Patch()
  onPatch(@Body() addFirstDto: UpdateFirstDto) {
    return addFirstDto;
  }
}
