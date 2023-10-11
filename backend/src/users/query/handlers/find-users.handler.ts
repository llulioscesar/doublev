import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {UserGithubDto} from "../../dto/user-github.dto";
import {FindUsersQuery} from "../impl/find-users.query";
import {GithubService} from "../../services/github/github.service";

@QueryHandler(FindUsersQuery)
export class FindUsersHandler implements IQueryHandler<FindUsersQuery, UserGithubDto[]> {
    constructor(
        private readonly githubService: GithubService,
    ) {
    }

    async execute(query: FindUsersQuery): Promise<UserGithubDto[]> {
        const {name} = query;
        return this.githubService.findUsers(name);
    }
}