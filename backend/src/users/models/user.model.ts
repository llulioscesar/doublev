import {Field, ObjectType, Int} from "@nestjs/graphql";

@ObjectType("User", {description: "User model"})
export class UserType {
    @Field(type => String, {nullable: true})
    login: string;

    @Field(type => Int, {nullable: true})
    id: number;

    @Field(type => String, {nullable: true})
    avatar_url: string;

    @Field(type => String, {nullable: true})
    url: string;

    @Field(type => String, {nullable: true})
    html_url: string;

    @Field(type => String, {nullable: true})
    followers_url: string;

    @Field(type => Int, {nullable: true})
    followers_count: number;
}