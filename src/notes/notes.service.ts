import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './create-note.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class NotesService {
    private notes = [
        {
            id: 1,
            title: 'First note',
        },
        {
            id: 2,
            title: 'Second note',
        },
    ];
    findAll() {
        return this.notes;
    }

    create(note: CreateNoteDto) {
       const newNote = {
            id: this.notes.length + 1,
            ...note
        }
        this.notes.push(newNote);
        return 'This action adds a new note';
    }
}
