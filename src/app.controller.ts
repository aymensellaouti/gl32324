import { Controller, Get, Post } from '@nestjs/common';
import { filter, of } from 'rxjs';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): any {
    return { message: 'hello GL3' };
  }
  @Get('observable')
  getObservable(): any {
    // 1 2 3
    return of(1, 2, 3).pipe(filter((x) => !(x % 2)));
  }

  @Post()
  addHello(): any {
    return { message: 'POST GL3' };
  }
}
