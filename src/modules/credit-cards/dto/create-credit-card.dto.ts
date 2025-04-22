import { IsString, IsNumber, IsDate, IsOptional, Min } from "class-validator";
import { Type } from "class-transformer";

export class CreateCreditCardDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  balance: number;

  @IsNumber()
  @Min(0)
  apr: number;

  @IsNumber()
  @Min(0)
  minimumPayment: number;

  @Type(() => Date)
  @IsDate()
  dueDate: Date;

  @IsNumber()
  @Min(0)
  lateFee: number;

  @IsString()
  @IsOptional()
  userId?: string;
}
