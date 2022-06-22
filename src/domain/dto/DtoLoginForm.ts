import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class DtoLoginForm {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  @MinLength(8)
  password!: string;
}
