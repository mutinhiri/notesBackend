import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { DatabaseModule } from './database/database.module';
import { NoteesModule } from './notees/notees.module';

@Module({
  imports: [NotesModule, DatabaseModule, NoteesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
