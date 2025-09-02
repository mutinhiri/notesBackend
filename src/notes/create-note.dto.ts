import { IsString } from "class-validator";

export class CreateNoteDto {
    // id: number
    @IsString()
    title: string;
}