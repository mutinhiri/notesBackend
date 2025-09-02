import { Body, Controller, Get,Post, ValidationPipe } from '@nestjs/common';
import { CreateNoteDto } from './create-note.dto';
import { NotesService } from './notes.service';
import { Prisma } from '@prisma/client';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}

    @Get()
    findAll() {
        return this.notesService.findAll();
    }

    @Post()
    create(@Body(ValidationPipe) note: CreateNoteDto) {
        const prismaInput = { title: note.title } as Prisma.NoteCreateInput
        return this.notesService.create(prismaInput);
    }
}
