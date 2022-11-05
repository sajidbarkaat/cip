import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { createMap, forMember, ignore, mapFrom, Mapper, MappingProfile } from "@automapper/core";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from "../entities/user.entity";
import { RegisteredUserDto } from "../dtos/registered-user.dto";

@Injectable()
export class UserMapperProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, CreateUserDto, User);
      createMap(mapper, User, RegisteredUserDto);
    };
  }
}