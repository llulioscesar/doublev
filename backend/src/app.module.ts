import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {join} from "path";
import {TypeOrmModule} from "@nestjs/typeorm";
import * as process from "process";
import {UserEntity} from "./users/entities/user.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DB_HOST || 'localhost',
          port: parseInt(process.env.DB_PORT, 10) || 5432,
          password: process.env.DB_PASSWORD || 'postgres',
          username: process.env.DB_USER || 'postgres',
          entities: [UserEntity],
          database: process.env.DB_NAME || 'postgres',
          synchronize: true,
          logging: true,
      }),
      GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      }),
      UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
