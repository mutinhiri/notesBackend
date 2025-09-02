import { Body, Controller, Get,Post } from '@nestjs/common';
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
    create(@Body() note: CreateNoteDto) {
        return this.notesService.create(note);
    }
}
