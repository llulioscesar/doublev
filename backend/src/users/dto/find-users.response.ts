import {UserGithubDto} from "./user-github.dto";

export class FindUsersResponse {
    constructor(
        public total_count: number,
        public incomplete_results: boolean,
        public items: UserGithubDto[],
    ) {
    }
};
