import {AggregateRoot} from "@nestjs/cqrs";
import {CreateUserEvent} from "../events/impl/create-user.event";

export class User extends AggregateRoot {
    constructor(
        private readonly id: number,
        private readonly login: string
    ) {
        super();
    }

    create() {
        this.apply(new CreateUserEvent(this.login, this.id))
    }

}