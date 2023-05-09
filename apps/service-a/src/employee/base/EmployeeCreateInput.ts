/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeCreateNestedManyWithoutEmployeesInput } from "./EmployeeCreateNestedManyWithoutEmployeesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";

@InputType()
class EmployeeCreateInput {
  @ApiProperty({
    required: false,
    type: () => EmployeeCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => EmployeeCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => EmployeeCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  employees?: EmployeeCreateNestedManyWithoutEmployeesInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeeWhereUniqueInput, {
    nullable: true,
  })
  employee?: EmployeeWhereUniqueInput | null;
}

export { EmployeeCreateInput as EmployeeCreateInput };
