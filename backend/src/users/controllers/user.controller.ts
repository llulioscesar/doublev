import {Controller, Get, Post} from "@nestjs/common";
import {CreateUserCommand} from "../commands/impl/create-user.command";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {GetUserSaveQuery} from "../query/impl/get-user-save.query";

@Controller('users')
export class UserController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {
    }

    @Post()
    async create() {
        const cmd = new CreateUserCommand('login', 1)
        await this.commandBus.execute(cmd)
        return 'ok';
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new GetUserSaveQuery());
    }
}