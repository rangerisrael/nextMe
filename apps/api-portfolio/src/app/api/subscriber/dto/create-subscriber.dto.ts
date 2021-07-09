import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsString } from "class-validator";

  export class NewSubscriberDto{

    @IsString()
    @IsDefined()
    @ApiProperty()
      fullName:string;
      
    @IsString()
    @IsDefined()
    @ApiProperty()
      email:string;

      @IsString()
    @IsDefined()
    @ApiProperty()
      phoneNumber:string;
  }