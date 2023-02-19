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
        host: 'localhost',
        port:  3306,
        username: 'root',
        password: '1234',
        database: 'form',
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
