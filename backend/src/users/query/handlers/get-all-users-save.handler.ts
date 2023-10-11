import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetUserSaveQuery} from "../impl/get-user-save.query";
import {UserRepository} from "../../repositories/users/user.repository";

@QueryHandler(GetUserSaveQuery)
export class GetAllUsersSaveHandler implements IQueryHandler<GetUserSaveQuery>{
    constructor(
        private readonly userRepository: UserRepository,
    ) {
    }

    async execute() {
        return await this.userRepository.getAll()
    }
}