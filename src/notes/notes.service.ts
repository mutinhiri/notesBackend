import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
    findAll() {
        return 'This action returns all notes';
    }

    create() {
        return 'This action adds a new note';
    }
}
