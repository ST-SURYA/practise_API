import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/updateUserDto';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}
  @Get()
  getAllUser() {
    return this.usersService.getAllUser();
  }
  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateDetails: UpdateUserDto) {
    return this.usersService.updateUser(id, updateDetails);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
