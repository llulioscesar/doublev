import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../../entities/user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "../../dto/create-user.dto";
import {User} from "../../ddd/user.model";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    ) {
    }

    async create(createUserDto: CreateUserDto) {
        const user = new UserEntity();
        user.login = createUserDto.login;
        user.id = createUserDto.id;

        const userSaved = await this.userRepository.save(user);
        return new User(userSaved.id, userSaved.login);
    }

    async getAll() {
        const usersEntity = await this.userRepository.find();
        return usersEntity.map(userEntity => new User(userEntity.id, userEntity.login));
    }

    async getById(id: number) {
        const userEntity = await this.userRepository.findOne({where: {id}});
        return new User(userEntity.id, userEntity.login);
    }
}