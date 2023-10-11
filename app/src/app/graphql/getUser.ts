import {User} from "./findUser";
import {gql} from "@apollo/client";

interface GetUserResponse {
    getUser: User;
}

const getUserQuery = gql`query getUser($name: String!) {
  getUser(args: { name: $name }) {
    login
    avatar_url
    id
    followers_url
  }
}`;

export {getUserQuery};
export type { GetUserResponse };