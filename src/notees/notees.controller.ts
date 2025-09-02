import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoteesService } from './notees.service';
// import { Prisma } from '@prisma/client/extension';
import { Prisma } from 'generated/prisma';


@Controller('notees')
export class NoteesController {
  constructor(private readonly noteesService: NoteesService) {}

  @Post()
  create(@Body() createNoteeDto: Prisma.NoteCreateInput) {
    return this.noteesService.create(createNoteeDto);
  }

  @Get()
  findAll() {
    return this.noteesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteeDto: Prisma.NoteUpdateInput) {
    return this.noteesService.update(+id, updateNoteeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteesService.remove(+id);
  }
}
