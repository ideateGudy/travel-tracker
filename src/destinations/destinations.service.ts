import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDestinationsDto } from './dto/create-destinations.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';

@Injectable()
export class DestinationsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createDestinationDto: CreateDestinationsDto) {
    return this.prisma.destination.create({
      data: {
        ...createDestinationDto,
        travelDate: new Date(createDestinationDto.travelDate).toISOString(),
        userId, // Associate the destination with the authenticated user
      },
    });
  }
  async findAll(userId: string) {
    return this.prisma.destination.findMany({
      where: { userId },
    });
  }

  async findOne(id: string, userId: string) {
    const destination = await this.prisma.destination.findFirst({
      where: { id, userId },
    });

    if (!destination) {
      throw new NotFoundException(
        `Destination not found with the given ID ${id}`,
      );
    }

    return destination;
  }

  async removeDestination(id: string, userId: string) {
    await this.findOne(id, userId);

    return this.prisma.destination.delete({
      where: { id },
    });
  }

  async updateDestination(
    id: string,
    userId: string,
    updateDestinationDto: UpdateDestinationDto,
  ) {
    await this.findOne(id, userId);

    return this.prisma.destination.update({
      where: { id },
      data: updateDestinationDto,
    });
  }
}
