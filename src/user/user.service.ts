import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user';
import { createUserPrams, updateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  getAllUser() {
    return this.userRepo.find();
  }

  getUserById(id: number) {
    return this.userRepo.find({ where: { id: Number(id) } });
  }

  createUser(userDetails: createUserPrams) {
    const newUser = this.userRepo.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepo.save(newUser);
  }

  updateUser(id: number, updateDetails: updateUserParams) {
    return this.userRepo.update({ id }, { ...updateDetails });
  }

  deleteUser(id: number) {
    return this.userRepo.delete({ id: Number(id) });
  }
}
