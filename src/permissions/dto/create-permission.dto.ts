import { IsNotEmpty, IsString, IsArray, IsMongoId } from 'class-validator';

export class CreatePermissionDto {
  @IsMongoId()
  user: string; // The ID of the user for whom the permission is granted

  @IsString()
  @IsNotEmpty()
  resource: string; // The resource the permission applies to

  @IsArray()
  @IsNotEmpty()
  actions: string[]; // The allowed actions, e.g., ['CREATE', 'READ', 'UPDATE', 'DELETE']
}
