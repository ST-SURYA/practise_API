import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { profile } from 'src/entity/Profile';
import { User } from 'src/entity/user';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, profile]) , UserModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
