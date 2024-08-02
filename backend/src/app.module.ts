import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketModule } from './socket/socket.module';
import { HealthModule } from './health/health.module';
import { HealthController } from './health/health.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), SocketModule, HealthModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
