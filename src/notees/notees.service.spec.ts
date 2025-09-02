import { Test, TestingModule } from '@nestjs/testing';
import { NoteesService } from './notees.service';

describe('NoteesService', () => {
  let service: NoteesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteesService],
    }).compile();

    service = module.get<NoteesService>(NoteesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
