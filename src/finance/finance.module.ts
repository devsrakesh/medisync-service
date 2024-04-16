import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { FinanceController } from './finance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Finance, FinanceSchema } from './finance.entity';

@Module({
  imports:[    
    MongooseModule.forFeature([{ name:Finance.name, schema: FinanceSchema }]),
  ],
  controllers: [FinanceController],
  providers: [FinanceService],
})
export class FinanceModule {}
