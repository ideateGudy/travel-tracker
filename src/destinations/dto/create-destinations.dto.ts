import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateDestinationsDto {
  constructor(name: string, travelDate: string, notes?: string) {
    this.name = name;
    this.travelDate = travelDate;
    this.notes = notes;
  }
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  travelDate: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
