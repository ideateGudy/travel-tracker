import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DestinationsService } from './destinations.service';
import { CreateDestinationsDto } from './dto/create-destinations.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';

@Controller('destinations')
@UseGuards(JwtAuthGuard)
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Post('create')
  create(@Request() req, @Body() createDestinationDto: CreateDestinationsDto) {
    // Logic to create a destination using req.user for authentication
    return this.destinationsService.create(
      req.user.userId,
      createDestinationDto,
    );
  }

  @Get()
  findAll(@Request() req) {
    // Logic to find all destinations for the authenticated user
    return this.destinationsService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    // Logic to find a specific destination by ID for the authenticated user
    return this.destinationsService.findOne(id, req.user.userId);
  }

  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateDestinationDto: UpdateDestinationDto,
  ) {
    return this.destinationsService.updateDestination(
      id,
      req.user.userId,
      updateDestinationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.destinationsService.removeDestination(id, req.user.userId);
  }
}
