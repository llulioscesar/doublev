import {Module} from '@nestjs/common';
import {UsersResolver} from "./resolvers/users.resolver";
import {GithubService} from "./services/github/github.service";
import {HttpModule} from "@nestjs/axios";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {UserRepository} from "./repositories/users/user.repository";
import {UserController} from "./controllers/user.controller";
import {UsersSagas} from "./sagas/users.sagas";
import {CommandHandlers} from "./commands/handlers";
import {EventHandlers} from "./events/handlers";
import {QueryHandlers} from "./query/handlers";
import {CqrsModule} from "@nestjs/cqrs";

@Module({
    imports: [
        CqrsModule,
        HttpModule,
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [UserController],
    exports: [],
    providers: [
        UsersResolver,
        GithubService,
        UserRepository,
        ...CommandHandlers,
        ...EventHandlers,
        ...QueryHandlers,
        UsersSagas,
    ],
})
export class UsersModule {
}
