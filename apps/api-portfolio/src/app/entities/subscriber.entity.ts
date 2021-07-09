
import {Entity,PrimaryGeneratedColumn,Column } from 'typeorm';


@Entity({name:'subscriber'})

export class UserSubscriberEntity{

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  fullName:string;

  @Column()
  email:string;

  @Column()
  phoneNumber:string;

}
