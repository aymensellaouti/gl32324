import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from '../../common/database/timestamp.entity';
import { Profile } from '../../profile/entities/profile.entity';


@Entity('first')
export class FirstEntity extends Timestamp {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({})
  name: string;
  @Column({})
  age: number;
  @OneToMany(
    () => Profile,
    (profile: Profile) => profile.user
  )
  profiles: FirstEntity;
}
