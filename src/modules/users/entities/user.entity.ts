/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    username: string;
  
    @Column()
    password: string;
  
    @Column({ default: true })
    isActive: boolean;   
}
