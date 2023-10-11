import {IEvent} from "@nestjs/cqrs";

export class CreateUserEvent implements IEvent {
    constructor(
        public readonly login: string,
        public readonly id: number,
    ) {
    }
}