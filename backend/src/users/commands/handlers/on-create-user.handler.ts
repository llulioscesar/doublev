import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {OnCreateUserCommand} from "../impl/on-create-user.command";

@CommandHandler(OnCreateUserCommand)
export class OnCreateUserHandler implements ICommandHandler<OnCreateUserCommand> {
    constructor(
    ) {
    }

    async execute(command: OnCreateUserCommand) {
        console.log('OnCreateUserHandler');
    }
}