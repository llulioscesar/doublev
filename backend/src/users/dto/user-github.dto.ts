export class UserGithubDto {
    constructor(
        public login: string,
        public id: number,
        public avatar_url: string,
        public html_url: string,
        public followers_url: string,
        public followers_count: number,
    ) {
    }
}