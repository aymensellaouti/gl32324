import { Injectable, NotFoundException } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { Repository, UpdateResult } from 'typeorm';
import { FirstEntity } from './entity/first.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddFirstDto } from './dto/add-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';
import { CrudService } from '../common/service/crud.service';

@Injectable()
export class FirstService extends CrudService<FirstEntity> {
  constructor(
    @InjectRepository(FirstEntity)
    private firstRepository: Repository<FirstEntity>,
  ) {
    super(firstRepository);
  }
}
