/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';
@Entity("users")
export class User {

  @AutoMap()
  @PrimaryGeneratedColumn()
    id: number;
  
    @AutoMap()
    @Column()
    username: string;
  
    @AutoMap()
    @Column()
    password: string;
  
    @AutoMap()
    @Column({ default: true })
    isActive: boolean;   
}
