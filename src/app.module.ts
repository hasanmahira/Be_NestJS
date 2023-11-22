import { Module } from '@nestjs/common';
import { ScraperModule } from './scraper/scraper.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowtimeEntity } from './showtime/entity/showtime.entity';
import { ShowtimeSummaryEntity } from './showtime/entity/showtimeSummary.entity';
import { ConfigModule } from './config/config.module';
import databaseConfig from './config/database.config';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        entities: [ShowtimeEntity, ShowtimeSummaryEntity],
        synchronize: true, // Set to false in production
        autoLoadEntities: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    ScraperModule,
    ShowtimeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


   /*  TypeOrmModule.forRoot({
      //TODO: Refactor this section to use the NestJS configuration management feature.
      // Avoid hardcoding sensitive information and use environment variables instead.
      // You may need to create a separate configuration module or use an existing one.
      // Ensure that the solution is scalable and environment agnostic.
      type: 'postgres',
      host: 'localhost',
      port: 7201,
      username: 'postgres',
      password: '1196',
      database: 'd1',
      entities: [ShowtimeEntity, ShowtimeSummaryEntity],
      synchronize: true,
      logging: true,
    }), // db con updated */