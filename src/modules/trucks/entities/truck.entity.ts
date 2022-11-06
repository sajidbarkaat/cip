/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';
@Entity("trucks")
export class Truck {

  @AutoMap()
  @PrimaryGeneratedColumn()
    id: number;
  
    @AutoMap()
    @Column()
    licensePlateNumber: string;
  
    @AutoMap()
    @Column({ default: true })
    isActive: boolean;   
}
