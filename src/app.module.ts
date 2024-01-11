import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user';
import { UserModule } from './user/user.module';
import { profile } from './entity/Profile';
import { ProfileModule } from './profile/profile.module';
import { LoggerMiddleware } from './Middleware/logger.middleware';
import { MulterModule } from '@nestjs/platform-express';
import { PhotosModule } from './photos/photos.module';
import { Photos } from './entity/Photos';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sampledatabase',
      entities: [User, profile, Photos],
      synchronize: true,
    }),
    MulterModule.register({
      dest: '/src/uploads',
    }),
    UserModule,
    ProfileModule,
    PhotosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user');
  }
}
