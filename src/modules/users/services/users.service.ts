import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateUserDto } from '../dtos/create-user.dto'
import { FindUserDto } from '../dtos/find-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor (private prismaService: PrismaService) {

  }
  async create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({data: {username: createUserDto.username, password: createUserDto.password} });    
  }

  findOne(findUserDto: FindUserDto) {
    return this.prismaService.user.findFirst({where: findUserDto})
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  // findOne(id: number) {
  //   return this.prismaService.user.findFirst({where: { id: id}});
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
