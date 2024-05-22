import { Test, TestingModule } from '@nestjs/testing';
import { BannerHomeController } from './banner-home.controller';

describe('BannerHomeController', () => {
  let controller: BannerHomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BannerHomeController],
    }).compile();

    controller = module.get<BannerHomeController>(BannerHomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
