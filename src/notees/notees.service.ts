import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class NoteesService {
  constructor(private readonly databaseService: DatabaseService) {}
  
async  create(createNoteeDto: Prisma.NoteCreateInput) {
    return this.databaseService.note.create({ data: createNoteeDto });
  }

 async findAll() {
    return this.databaseService.note.findMany();
  }

async findOne(id: number) {
    return this.databaseService.note.findUnique({ where: { id } });
  }

async  update(id: number, updateNoteeDto: Prisma.NoteUpdateInput) {
    return this.databaseService.note.update({ where: { id }, data: updateNoteeDto });
  }

async  remove(id: number) {
    return this.databaseService.note.delete({ where: { id } });
  }
}
