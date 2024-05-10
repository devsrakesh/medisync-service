import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class UpdateAuthDto {
  @Matches(/^[0-9]{10}$/, {
    message: 'Invalid phone number. It must be a 10-digit number.',
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
