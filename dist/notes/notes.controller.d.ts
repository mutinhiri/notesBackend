import { CreateNoteDto } from './create-note.dto';
import { NotesService } from './notes.service';
import { Prisma } from '@prisma/client';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    findAll(): Prisma.PrismaPromise<{
        id: number;
        title: string;
        createdAt: Date;
    }[]>;
    create(note: CreateNoteDto): Promise<{
        id: number;
        title: string;
        createdAt: Date;
    }>;
}
