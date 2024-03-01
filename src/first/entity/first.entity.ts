import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from '../../common/database/timestamp.entity';

@Entity('first')
export class FirstEntity extends Timestamp {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({})
  name: string;
  @Column({})
  age: number;
}
