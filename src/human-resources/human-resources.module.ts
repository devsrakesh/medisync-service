import { Module } from '@nestjs/common';
import { HumanResourcesService } from './human-resources.service';
import { HumanResourcesController } from './human-resources.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HumanResources, HumanResourcesSchema } from './human-resources.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: HumanResources.name, schema: HumanResourcesSchema }])],
  controllers: [HumanResourcesController],
  providers: [HumanResourcesService],
})
export class HumanResourcesModule {}
