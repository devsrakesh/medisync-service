import { Module } from '@nestjs/common';
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
import { AuthModule } from './auth/auth.module';
import { PermissionsModule } from './permissions/permissions.module';
import { PermissionsGuard } from './common/guards/permission.guard';

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
    UserModule,
    PatientModule,
    ApointmentModule,
    BillingModule,
    InventoryModule,
    LaboratoryModule,
    PharmacyModule,
    FinanceModule,
    HumanResourcesModule,
    HospitalModule,
    RoleModule,
    AuthModule,
    PermissionsModule,
  ],
  controllers: [],
  providers: [PermissionsGuard],
})
export class AppModule {}
