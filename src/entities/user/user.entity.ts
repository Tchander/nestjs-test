import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

import { Gender } from './types'


@Entity('users')
export class User {
  @PrimaryGeneratedColumn() // Generated инкрементирует динамически id при добавлении нового пользователя
  id: number;

  @Column({ name: 'email', type: 'varchar' }) // значения поля type берутся из спецификации postgres
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar' })
  lastName: string;

  @Column({ name: 'birth_date', type: 'timestamp', nullable: true })
  birthDate: Date;

  @Column({ name: 'gender', type: 'enum', enum: Gender, nullable: true })
  gender: Gender | null;
}