import { Module } from '@nestjs/common';
import { AppointmentService } from './apointment.service';
import { AppointmentController } from './apointment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './appointment.entity';

@Module({
  imports:[    
    MongooseModule.forFeature([{ name: Appointment.name, schema: AppointmentSchema }]),
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class ApointmentModule {}
