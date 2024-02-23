import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { genSalt, hash } from 'bcrypt';

import { User } from './user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  // Register new user
  public async createUser(userData: any) {
    const salt = await genSalt(10);

    const hashedPassword = await hash(userData.password, salt);

    const newUser = this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });
    return await this.userRepository.save(newUser);
  }

  // Get user by id
  public async getUserData(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }
}
