import {EventsHandler, IEventHandler} from "@nestjs/cqrs";
import {CreateUserEvent} from "../impl/create-user.event";

@EventsHandler(CreateUserEvent)
export class CreateUserHandler implements IEventHandler<CreateUserEvent> {
    handle(event: CreateUserEvent) {
        console.log('Async CreateUserEvent...');
    }
}