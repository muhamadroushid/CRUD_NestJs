import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types'; //npm i @nestjs/mapped-types -D

export class UpdateUserDto extends PartialType(CreateUserDto) {}
