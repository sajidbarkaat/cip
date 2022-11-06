import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { createMap, forMember, ignore, mapFrom, Mapper, MappingProfile } from "@automapper/core";
import { Injectable } from "@nestjs/common";
import { CreateTruckDto } from "../dtos/create-truck.dto";
import { Truck } from "../entities/truck.entity";
import { RegisteredTruckDto } from "../dtos/registered-truck.dto";

@Injectable()
export class TrucksMapperProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, CreateTruckDto, Truck);
      createMap(mapper, Truck, RegisteredTruckDto);
    };
  }
}