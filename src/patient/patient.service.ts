// patient.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from './patient.entity';
import { CreatePatientDto, UpdatePatientDto } from './patient.dto';

@Injectable()
export class PatientService {
  constructor(@InjectModel(Patient.name) private patientModel: Model<PatientDocument>) {}

  async findAll(): Promise<Patient[]> {
    return this.patientModel.find().exec();
  }

  async findById(id: string): Promise<Patient> {
    return this.patientModel.findById(id).exec();
  }

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const createdPatient = new this.patientModel(createPatientDto);
    return createdPatient.save();
  }

  async update(id: string, updatePatientDto: UpdatePatientDto): Promise<Patient> {
    return this.patientModel.findByIdAndUpdate(id, updatePatientDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Patient> {
    return this.patientModel.findByIdAndDelete(id).exec();
  }
}
