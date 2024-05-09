import { Controller, Get, Post, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';

@Controller('permissions')
export class PermissionsController {
  constructor(private permissionsService: PermissionsService) {}

  @Get()
  async findAll() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.permissionsService.findById(id);
  }

  @Post()
  @UsePipes(ValidationPipe) // Validate the incoming DTO
  async create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.permissionsService.delete(id);
    return { message: 'Permission deleted successfully' };
  }
}
