import {Injectable} from "@nestjs/common";
import {delay, map, Observable} from "rxjs";
import {ICommand, ofType, Saga} from "@nestjs/cqrs";
import {CreateUserEvent} from "../events/impl/create-user.event";
import {OnCreateUserCommand} from "../commands/impl/on-create-user.command";

@Injectable()
export class UsersSagas {
    @Saga()
    createUser = (events$: Observable<any>): Observable<ICommand> => {
        return events$
            .pipe(
                ofType(CreateUserEvent),
                delay(1000),
                map(event => {
                    console.log('Inside [UsersSagas] Saga');
                    return new OnCreateUserCommand(event.id, event.login);
                }
            ),
        );
    }
}