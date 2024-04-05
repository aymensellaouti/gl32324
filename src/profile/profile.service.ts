import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { CrudService } from '../common/service/crud.service';


@Injectable()
export class ProfileService extends CrudService<Profile> {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {
    super(profileRepository);
  }
}
