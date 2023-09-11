import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Put,
  Delete,
  Get,
  Param,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/create.todo.dto';
import { UpdateTodoDto } from './dtos/update.todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createTodo: CreateTodoDto) {
    return this.todoService.create(createTodo);
  }

  @Put(':id')
  async update(
    @Param() id: string,
    @Body(new ValidationPipe()) updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Get()
  async find() {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    return this.todoService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param() id: string) {
    return this.todoService.delete(id);
  }
}