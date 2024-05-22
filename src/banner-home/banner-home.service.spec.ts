import { Test, TestingModule } from '@nestjs/testing';
import { BannerHomeService } from './banner-home.service';

describe('BannerHomeService', () => {
  let service: BannerHomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannerHomeService],
    }).compile();

    service = module.get<BannerHomeService>(BannerHomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
