import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { HealthController } from './health/health.controller';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HealthModule, SocketModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
