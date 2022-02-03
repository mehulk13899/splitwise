import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import {
  AddfriendExpenseDto,
  AddGroupExpenseDto,
  AddUserIntoGroupDto,
  CreateGroupDto,
  UserriendHistory,
} from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Groups')
@Controller('group')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Post('create')
  create(@Req() req, @Body() createGroupDto: CreateGroupDto) {
    const id = req?.user?.payload?.id;
    return this.groupsService.create(createGroupDto, id);
  }

  @Post('addUserIntoGroup')
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  addUserIntoGroup(@Req() req, @Body() addUserIntoGroup: AddUserIntoGroupDto) {
    const id = req?.user?.payload?.id;
    return this.groupsService.addUserIntoGroup(addUserIntoGroup, id);
  }

  @Post('removeUserfromGroup')
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Post('removeUserfromGroup')
  removeUserfromGroup(
    @Req() req,
    @Body() addUserIntoGroup: AddUserIntoGroupDto,
  ) {
    const id = req?.user?.payload?.id;
    return this.groupsService.removeUserfromGroup(addUserIntoGroup, id);
  }

  @Get('getbyid/:id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(id);
  }
}
@ApiTags('Expense')
@Controller('expense')
export class UserExpenseController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post('add_expense_for_friend')
  addExpence(@Req() req, @Body() addExpenceDto: AddfriendExpenseDto) {
    return this.groupsService.addExpenceToUser(addExpenceDto);
  }

  @Post('payment_history_withfriend')
  getExpense(@Body() expenseDto: UserriendHistory) {
    return this.groupsService.getExpenceRelation(expenseDto);
  }

  @Post('SettleUp')
  SettleUpExpense(@Body() expenseDto: UserriendHistory) {
    return this.groupsService.SettleUpExpense(expenseDto);
  }

  @Post('add_expense_into_group')
  addExpenceforGroup(@Req() req, @Body() addExpenceDto: AddGroupExpenseDto) {
    return this.groupsService.addExpence(addExpenceDto);
  }
}
