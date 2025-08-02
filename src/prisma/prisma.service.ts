import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();

    // Optionally, you can log the connection status
    console.log('Prisma connected successfully');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    // Optionally, you can log the disconnection status
    console.log('Prisma disconnected successfully');
  }
}
