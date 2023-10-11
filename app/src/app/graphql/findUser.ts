import {gql} from "@apollo/client";

interface User {
    login: string;
    id: string;
    avatar_url: string;
    followers_count: number;
}

interface FindUsersResponse {
    findUsers: User[];
}

interface FindUsersArgs {
    name: string;
}

const findUsersQuery = gql`query findUsers($name: String!) {
  findUsers(args: { name: $name }) {
    login
    id
    avatar_url
    followers_count
  }
}`;

export {findUsersQuery};
export type { FindUsersResponse, FindUsersArgs, User };
