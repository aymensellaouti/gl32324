import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { AddFirstDto } from './add-first.dto';

export class UpdateFirstDto extends PartialType(AddFirstDto) {}
