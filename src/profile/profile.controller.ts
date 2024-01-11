import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { createProfileDto } from './dtos/createProfile.dto';
import { UserService } from 'src/user/user.service';

@Controller('user/:id/profile')
export class ProfileController {
  constructor(
    private ProfileService: ProfileService,
    private userServices: UserService,
  ) {}

  @Get()
  get() {
    return this.userServices.getAllUser();
  }

  @Post()
  createProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() profileInfo: createProfileDto,
  ) {
    return this.ProfileService.createProfile(id, profileInfo);
  }
}
