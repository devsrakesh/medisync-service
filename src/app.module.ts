import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module';
import { ApointmentModule } from './apointment/apointment.module';
import { BillingModule } from './billing/billing.module';
import { InventoryModule } from './inventory/inventory.module';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { FinanceModule } from './finance/finance.module';
import { HumanResourcesModule } from './human-resources/human-resources.module';
import { HospitalModule } from './hospital/hospital.module';
import { RoleModule } from './role/role.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
    }),
    AuthModule, UserModule, PatientModule, ApointmentModule, BillingModule, InventoryModule, LaboratoryModule, PharmacyModule, FinanceModule, HumanResourcesModule, HospitalModule, RoleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
