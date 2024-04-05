import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FirstService } from './first.service';
import { AddFirstDto } from './dto/add-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';

@Controller('first')
export class FirstController {
  // On a besoin d'une dépendance qui a un Token FirstService
  constructor(@Inject(FirstService) private firstService: FirstService) {}
  @Get()
  findAll() {
    return this.firstService.findAll();
  }
  @Post()
  onPost(@Body() addFirstDto: AddFirstDto) {
    return this.firstService.create(addFirstDto);
  }
  @Patch(':id')
  onPatch(@Body() updateFirstDto: UpdateFirstDto, @Param('id') id: string) {
    return this.firstService.update(id, updateFirstDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.firstService.remove(id);
  }
  @Patch('restore/:id')
  restore(@Param('id') id: string) {
    return this.firstService.restore(id);
  }
}
