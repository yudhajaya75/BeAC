import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerHomeEntity } from './entity/banner-home.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config';

@Injectable()
export class BannerHomeService {
  constructor(
    @InjectRepository(BannerHomeEntity)
    private aboutPageRepository: Repository<BannerHomeEntity>,
  ) {}

  async findData(id: number): Promise<BannerHomeEntity | null> {
    return await this.aboutPageRepository.findOne({ where: { id } });
  }

  async getImage(): Promise<string | null> {
    try {
      const res = await axios.get(
        process.env.STRAPI_URL + 'banner-homes?populate=*',
      );
      const findImage = res.data.data.attributes.image.data.attributes.url;
      const imageUrl = `http://localhoast:1337${findImage}`;
      return imageUrl;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Failed to fetch image');
    }
  }

  async findDataWithImage(id: number): Promise<any> {
    const findData = await this.findData(id);
    if (!findData) return null; // Return null if data is not found

    const imageUrl = await this.getImage();

    return {
      ...findData,
      imageUrl,
    };
  }
}
