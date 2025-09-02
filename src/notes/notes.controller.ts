import { Body, Controller, Get,Post, ValidationPipe } from '@nestjs/common';
import { CreateNoteDto } from './create-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}

    @Get()
    findAll() {
        return this.notesService.findAll();
    }

    @Post()
    create(@Body(ValidationPipe) note: CreateNoteDto) {
        return this.notesService.create(note);
    }
}
