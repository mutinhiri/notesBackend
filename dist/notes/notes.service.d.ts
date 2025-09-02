import { CreateNoteDto } from './create-note.dto';
export declare class NotesService {
    private notes;
    findAll(): {
        id: number;
        title: string;
    }[];
    create(note: CreateNoteDto): {
        title: string;
        id: number;
    };
}
