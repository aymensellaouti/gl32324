import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FirstEntity } from './entity/first.entity';
import { InjectRepository } from '@nestjs/typeorm';
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
