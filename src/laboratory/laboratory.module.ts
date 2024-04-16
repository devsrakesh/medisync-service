import { Module } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { LaboratoryController } from './laboratory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Laboratory, LaboratorySchema } from './laboratory.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Laboratory.name, schema: LaboratorySchema }])],
  controllers: [LaboratoryController],
  providers: [LaboratoryService],
})
export class LaboratoryModule {}
