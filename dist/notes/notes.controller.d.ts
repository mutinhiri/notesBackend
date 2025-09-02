import { CreateNoteDto } from './create-note.dto';
import { NotesService } from './notes.service';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    findAll(): {
        id: number;
        title: string;
    }[];
    create(note: CreateNoteDto): {
        title: string;
        id: number;
    };
}
