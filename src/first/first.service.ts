import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Injectable()
export class FirstService {
  constructor(private loggerService: LoggerService) {}
  sayHello() {
    this.loggerService.logger('hello');
    return 'hello';
  }
}
