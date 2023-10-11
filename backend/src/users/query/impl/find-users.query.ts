import {IQuery} from "@nestjs/cqrs";

export class FindUsersQuery implements IQuery {
    constructor(public readonly name: string) {
    }
}

export class GetUserQuery implements IQuery {
    constructor(public readonly name: string) {
    }
}