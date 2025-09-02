import { Test, TestingModule } from '@nestjs/testing';
import { NoteesController } from './notees.controller';
import { NoteesService } from './notees.service';

describe('NoteesController', () => {
  let controller: NoteesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteesController],
      providers: [NoteesService],
    }).compile();

    controller = module.get<NoteesController>(NoteesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
