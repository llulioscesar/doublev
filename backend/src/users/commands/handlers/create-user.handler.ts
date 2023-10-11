import {CommandHandler, EventPublisher, ICommandHandler} from "@nestjs/cqrs";
import {CreateUserCommand} from "../impl/create-user.command";
import {UserRepository} from "../../repositories/users/user.repository";
import {User} from "../../ddd/user.model";
import {CreateUserDto} from "../../dto/create-user.dto";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly publisher: EventPublisher,
    ) {
    }

    async execute(command: CreateUserCommand) {

        const {login, id} = command;

        const dto = new CreateUserDto();
        dto.id = id;
        dto.login = login;

        const user = this.publisher.mergeObjectContext(
            new User(id, login)
        );
        user.create();

        await this.userRepository.create(dto);

        user.commit();
    }
}
