import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {FindUsersQuery, GetUserQuery} from "../impl/find-users.query";
import {GithubService} from "../../services/github/github.service";
import {UserGithubDto} from "../../dto/user-github.dto";

@QueryHandler(GetUserQuery)
export class GetUsersHandler implements IQueryHandler<GetUserQuery, UserGithubDto> {
    constructor(
        private readonly githubService: GithubService,
    ) {
    }

    async execute(query: GetUserQuery): Promise<UserGithubDto> {
        const {name} = query;
        return this.githubService.getUser(name);
    }
}