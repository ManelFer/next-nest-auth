import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'

import { ParametersPipe } from '../common/pipes/parameters.pipe'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto)
  }

  @Get()
  async findAll() {
    return await this.userService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id', ParametersPipe) id: string) {
    return await this.userService.findOne(id)
  }

  @Patch(':id')
  async update(@Param('id', ParametersPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto)
  }

  @Delete(':id')
  async remove(@Param('id', ParametersPipe) id: string) {
    await this.userService.remove(id)
  }
}
