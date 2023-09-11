import { IsNotEmpty, IsString, IsEnum, IsOptional } from 'class-validator';
import { TodoStatus } from '../schema/todo.schema';

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus;
}
