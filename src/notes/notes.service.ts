import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './create-note.dto';
import { NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class NotesService {
    constructor(private databaseService: DatabaseService) {}
    // private notes = [
    //     {
    //         id: 1,
    //         title: 'First note',
    //     },
    //     {
    //         id: 2,
    //         title: 'Second note',
    //     },
    // ];
    findAll() {
        return this.databaseService.note.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    async create(note: Prisma.NoteCreateInput) {
        if (!note.title) {
            throw new NotFoundException('Title is required');
        }
        return this.databaseService.note.create({ data: note });
    }
}
