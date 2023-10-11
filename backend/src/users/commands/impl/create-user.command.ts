import {ICommand} from "@nestjs/cqrs";

export class CreateUserCommand implements ICommand {
    constructor(
        public readonly login: string,
        public readonly id: number,
    ) {
    }
}