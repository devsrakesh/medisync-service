import { Module } from '@nestjs/common';
import { AppointmentService } from './apointment.service';
import { AppointmentController } from './apointment.controller';

@Module({
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class ApointmentModule {}
