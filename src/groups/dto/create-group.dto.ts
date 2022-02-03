import { ApiProperty } from '@nestjs/swagger';
import { Min } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty()
  name: string;
}

export class AddUserIntoGroupDto {
  @ApiProperty()
  group_id: string;
  @ApiProperty()
  user_id: string;
}
export class AddfriendExpenseDto {
  @ApiProperty()
  sender: string;
  @ApiProperty()
  reciever: string;
  @ApiProperty({
    minimum: 1,
  })
  amount: number;
}

export class UserriendHistory {
  @ApiProperty()
  user1: string;
  @ApiProperty({
    minimum: 1,
  })
  user2: string;
}
export class AddGroupExpenseDto {
  @ApiProperty()
  sender: string;
  @ApiProperty()
  group: string;
  @ApiProperty()
  @ApiProperty({
    minimum: 1,
  })
  amount: number;
}
