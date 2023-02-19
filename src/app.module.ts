import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@app/user/user.module';
import { UserEntity } from '@app/user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [ UserEntity], //entities: [__dirname + '/**/ */.entity{.ts,.js}']
        synchronize: true,
        ssl: true,

               
      }),
    }),
     UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
