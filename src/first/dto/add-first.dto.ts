import { Type } from 'class-transformer';
import { IsNumber, IsString, Min, MinLength } from 'class-validator';
import { minLengthMessageError } from '../../common/erro-message.error';

export class AddFirstDto {
  @IsString()
  @MinLength(5, {
    message: minLengthMessageError(true),
  })
  name: string;
  @Type((convertiVers) => Number)
  @IsNumber()
  age: number;
}
