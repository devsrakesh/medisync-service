import { IsNotEmpty, IsString, IsArray, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePermissionDto {
  @ApiProperty({
    description: 'The ID of the user for whom the permission is granted',
    example: '60c72b2f9f1b2c001c123abc', // Example ObjectId value
  })
  @IsMongoId()
  user: string; // The ID of the user for whom the permission is granted

  @ApiProperty({
    description: 'The resource to which the permission applies',
    example: 'Post', // An example resource
  })
  @IsString()
  @IsNotEmpty()
  resource: string; // The resource the permission applies to

  @ApiProperty({
    description: 'The allowed actions for the resource, such as CREATE, READ, UPDATE, DELETE',
    example: ['CREATE', 'READ'], // Example array of actions
  })
  @IsArray()
  @IsNotEmpty()
  actions: string[]; // The allowed actions, e.g., ['CREATE', 'READ', 'UPDATE', 'DELETE']
}
