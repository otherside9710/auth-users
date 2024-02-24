/* eslint-disable no-unused-vars */
import 'reflect-metadata';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export default class Credentials {
  @PrimaryColumn()
    id?: string;

  @Column()
    name!: string;

  @Column()
    email!: string;

  @Column()
    password!: string;

  @Column()
    phone!: string;
}
