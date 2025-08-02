import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//Makes the module global scope
@Global()
@Module({
  //Register prisma service in module
  providers: [PrismaService],
  //Making sure prima service is available to other modules that will import PrismaModule
  exports: [PrismaService],
})
export class PrismaModule {}
