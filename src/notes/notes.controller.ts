import { Body, Controller, Get,Post } from '@nestjs/common';

@Controller('notes')
export class NotesController {

    @Get()
    findAll() {
        return 'This action returns all notes';
    }

    @Post()
    create(@Body() createNoteDto: any ) {
        return 'This action adds a new note';
    }
}
