import { Module } from '@nestjs/common';
import { BannerHomeController } from './banner-home.controller';
import { BannerHomeService } from './banner-home.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerHomeEntity } from './entity/banner-home.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BannerHomeEntity])],
  controllers: [BannerHomeController],
  providers: [BannerHomeService],
})
export class BannerHomeModule {}
