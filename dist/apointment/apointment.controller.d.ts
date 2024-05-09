import { CreateAppointmentDto, UpdateAppointmentDto } from './appointment.dto';
import { Appointment } from './appointment.entity';
import { AppointmentService } from './apointment.service';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    findAll(): Promise<Appointment[]>;
    findById(id: string): Promise<Appointment>;
    create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment>;
    update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment>;
    remove(id: string): Promise<Appointment>;
}
