import { NoteesService } from './notees.service';
import { Prisma } from 'generated/prisma';
export declare class NoteesController {
    private readonly noteesService;
    constructor(noteesService: NoteesService);
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
    findOne(id: string): Promise<{
        title: string;
        createdAt: Date;
        id: number;
    } | null>;
    update(id: string, updateNoteeDto: Prisma.NoteUpdateInput): Promise<{
        title: string;
        createdAt: Date;
        id: number;
    }>;
    remove(id: string): Promise<{
        title: string;
        createdAt: Date;
        id: number;
    }>;
}
