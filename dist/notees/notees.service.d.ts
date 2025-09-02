import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
export declare class NoteesService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createNoteeDto: Prisma.NoteCreateInput): Promise<{
        title: string;
        createdAt: Date;
        id: number;
    }>;
    findAll(): Promise<{
        title: string;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        title: string;
        createdAt: Date;
        id: number;
    } | null>;
    update(id: number, updateNoteeDto: Prisma.NoteUpdateInput): Promise<{
        title: string;
        createdAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        title: string;
        createdAt: Date;
        id: number;
    }>;
}
