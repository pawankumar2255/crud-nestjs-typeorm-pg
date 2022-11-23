import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Req() req, @Res() res) {
    return this.userService.addNewUser(req,res)

  }

  @Get()
  findAllUser(@Res() res) {
    return this.userService.getAllUsers(res);
  }

  @Get(':id')
  findOneUser(@Req() req, @Res() res) {
    return this.userService.getOneUserById(req, res);
  }

  @Patch(':id')
  updateById(@Req() req, @Res() res) {
    return this.userService.updateUserById(req,res);
  }

  
  @Delete(':id')

  remove(@Req() req, @Res() res) {
    return this.userService.removeUserById(req, res);
  }
}
