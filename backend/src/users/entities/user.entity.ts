import {Column, Entity, PrimaryColumn, Unique} from "typeorm";

@Entity('users')
@Unique(['login', 'id'])
export class UserEntity {
    @PrimaryColumn({type: 'uuid', default: () => 'uuid_generate_v4()' })
    _id: string;

    @Column({type: 'varchar', length: 55, nullable: false})
    login: string;

    @Column({type: 'int', nullable: false})
    id: number;
}