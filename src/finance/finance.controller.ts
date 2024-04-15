// finance.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { CreateFinanceDto, UpdateFinanceDto } from './finance.dto';
import { Finance } from './finance.entity';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Get()
  async findAll(): Promise<Finance[]> {
    return this.financeService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Finance> {
    return this.financeService.findById(id);
  }

  @Post()
  async create(@Body() createFinanceDto: CreateFinanceDto): Promise<Finance> {
    return this.financeService.create(createFinanceDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFinanceDto: UpdateFinanceDto): Promise<Finance> {
    return this.financeService.update(id, updateFinanceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Finance> {
    return this.financeService.remove(id);
  }
}
