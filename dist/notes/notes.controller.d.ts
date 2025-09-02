import { CreateNoteDto } from './create-note.dto';
import { NotesService } from './notes.service';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    findAll(): string;
    create(note: CreateNoteDto): string;
}
