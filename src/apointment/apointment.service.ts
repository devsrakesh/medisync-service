// appointment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment, AppointmentDocument } from './appointment.entity';
import { CreateAppointmentDto, UpdateAppointmentDto } from './appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(@InjectModel(Appointment.name) private appointmentModel: Model<AppointmentDocument>) {}

  async findAll(): Promise<Appointment[]> {
    return this.appointmentModel.find().populate('patient').exec();
  }

  async findById(id: string): Promise<Appointment> {
    return this.appointmentModel.findById(id).populate('patient').exec();
  }

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const createdAppointment = new this.appointmentModel(createAppointmentDto);
    return createdAppointment.save();
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    return this.appointmentModel.findByIdAndUpdate(id, updateAppointmentDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Appointment> {
    return this.appointmentModel.findByIdAndDelete(id).exec();
  }
}
