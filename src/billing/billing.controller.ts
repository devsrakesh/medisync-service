// billing.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto, UpdateBillingDto } from './billing.dto';
import { Billing } from './billing.entity';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  async findAll(): Promise<Billing[]> {
    return this.billingService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Billing> {
    return this.billingService.findById(id);
  }

  @Post()
  async create(@Body() createBillingDto: CreateBillingDto): Promise<Billing> {
    return this.billingService.create(createBillingDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBillingDto: UpdateBillingDto): Promise<Billing> {
    return this.billingService.update(id, updateBillingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Billing> {
    return this.billingService.remove(id);
  }
}
