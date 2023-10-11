import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    login: string;

    @IsNumber()
    @IsNotEmpty()
    id: number;
}