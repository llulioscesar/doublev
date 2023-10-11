import {ArgsType, Field, InputType} from "@nestjs/graphql";
import {
    MinLength, registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint({ async: false })
class IsNotInDoubleVPartnersConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
        return typeof value === 'string' && !value.includes('doublevpartners');
    }
}

export function IsNotInDoubleVPartners(property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: IsNotInDoubleVPartnersConstraint,
        });
    };
}

@InputType()
export class FindUsersArgs {
    @Field(type => String, {nullable: false})
    @MinLength(4)
    @IsNotInDoubleVPartners('name')
    name: string;
}