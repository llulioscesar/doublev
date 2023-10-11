import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {catchError, firstValueFrom} from "rxjs";
import {AxiosError} from "axios";
import {FindUsersResponse} from "../../dto/find-users.response";
import {UserGithubDto} from "../../dto/user-github.dto";

@Injectable()
export class GithubService {
    constructor(
        private readonly httpService: HttpService,
    ) {
    }

    async findUsers(query: string): Promise<UserGithubDto[]> {
        const {data} = await firstValueFrom(
            this.httpService.get<FindUsersResponse>(`https://api.github.com/search/users?q=${query}&per_page=10`)
                .pipe(
                    catchError((error: AxiosError) => {
                        throw error.response.data;
                    }),
                ),
        );

        const users = await Promise.all(data.items.map(async (user) => {
            const {data: userGithub} = await firstValueFrom(
                this.httpService.get<UserGithubDto[]>(user.followers_url)
                    .pipe(
                        catchError((error: AxiosError) => {
                            throw error.response.data;
                        }),
                    ),
            );

            user.followers_count = userGithub.length;
            return user;
        }));
        return users;
    }

    async getUser(username: string): Promise<UserGithubDto> {
        const {data} = await firstValueFrom(
            this.httpService.get<UserGithubDto>(`https://api.github.com/users/${username}`)
                .pipe(
                    catchError((error: AxiosError) => {
                        throw error.response.data;
                    }),
                ),
        );
        return data;
    }
}
