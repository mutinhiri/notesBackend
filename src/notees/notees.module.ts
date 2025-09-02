import { Module } from '@nestjs/common';
import { NoteesService } from './notees.service';
import { NoteesController } from './notees.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NoteesController],
  providers: [NoteesService],
})
export class NoteesModule {}
