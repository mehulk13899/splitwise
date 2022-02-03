import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional()
  name: string;
  @ApiPropertyOptional()
  phone?: string;
  @ApiPropertyOptional()
  currency?: string;
}
