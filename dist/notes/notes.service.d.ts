import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class NotesService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Prisma.PrismaPromise<{
        id: number;
        title: string;
        createdAt: Date;
    }[]>;
    create(note: Prisma.NoteCreateInput): Promise<{
        id: number;
        title: string;
        createdAt: Date;
    }>;
}
