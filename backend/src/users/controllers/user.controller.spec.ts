// user.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/impl/create-user.command';
import { GetUserSaveQuery } from '../query/impl/get-user-save.query';

describe('UserController', () => {
    let controller: UserController;
    let commandBus: CommandBus;
    let queryBus: QueryBus;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                {
                    provide: CommandBus,
                    useValue: {
                        execute: jest.fn(),
                    },
                },
                {
                    provide: QueryBus,
                    useValue: {
                        execute: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<UserController>(UserController);
        commandBus = module.get<CommandBus>(CommandBus);
        queryBus = module.get<QueryBus>(QueryBus);
    });

    describe('create', () => {
        it('should execute CreateUserCommand and return "ok"', async () => {
            jest.spyOn(commandBus, 'execute').mockResolvedValueOnce(undefined);
            expect(await controller.create()).toBe('ok');
        });
    });

    describe('getAll', () => {
        it('should execute GetUserSaveQuery and return the result', async () => {
            const result = [];  // Suponiendo que se espera un array vacío como resultado
            jest.spyOn(queryBus, 'execute').mockResolvedValueOnce(result);
            expect(await controller.getAll()).toBe(result);
        });
    });
});
