
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { FirstEntity } from "../../first/entity/first.entity";
import { Timestamp } from "../../common/database/timestamp.entity";

export enum ProfileTypeEnum {
    Facebook = 'FB',
    LinkedIn = 'LinkedIn',
    X = 'X'
}

@Entity('profile')
export class Profile extends Timestamp {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    type: 'enum',
    enum: ProfileTypeEnum,
    default: ProfileTypeEnum.LinkedIn
  })
  type: ProfileTypeEnum;
  @Column({})
  username: string;

  @ManyToOne(
    () => FirstEntity,
    (user: FirstEntity) => user.profiles,
    {
        eager: false,
        nullable: true
    }
  )
  @JoinColumn({name: 'user_id'})
  user: FirstEntity;
}
