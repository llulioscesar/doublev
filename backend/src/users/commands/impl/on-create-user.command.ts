import {ICommand} from "@nestjs/cqrs";

export class OnCreateUserCommand implements ICommand {
    constructor(
        public readonly id: number,
        public readonly login: string,
    ) {}
}