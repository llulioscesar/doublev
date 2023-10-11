// Importaciones necesarias
import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserType } from '../models/user.model';
import { FindUsersArgs } from '../dto/find-users.args';
import {QueryBus} from "@nestjs/cqrs";
import {FindUsersQuery, GetUserQuery} from "../query/impl/find-users.query";

@Resolver(() => UserType)
export class UsersResolver {

    constructor(
        private readonly queryBus: QueryBus,
    ) {
    }

    @Query(() => [UserType], { name: 'findUsers' })
    async findUsers(
        @Args('args', { type: () => FindUsersArgs }) args: FindUsersArgs,
    ): Promise<UserType[]> {
        const query = new FindUsersQuery(args.name);
        const result = await this.queryBus.execute(query);
        return result as UserType[];
    }

    @Query(() => UserType, { name: 'getUser' })
    async getUser(
        @Args('args', { type: () => FindUsersArgs }) args: FindUsersArgs,
    ): Promise<UserType> {
        const query = new GetUserQuery(args.name);
        const result = await this.queryBus.execute(query);
        return result as UserType;
    }
}