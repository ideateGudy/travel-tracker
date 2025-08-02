import { PartialType } from '@nestjs/mapped-types';
import { CreateDestinationsDto } from './create-destinations.dto';

export class UpdateDestinationDto extends PartialType(CreateDestinationsDto) {}
