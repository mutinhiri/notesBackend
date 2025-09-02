import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [DatabaseModule],
})
export class NotesModule {}
