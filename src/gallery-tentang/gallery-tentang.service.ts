import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config';
import { GalleryTentangEntity } from './entity/gallery-tentang.entity';

@Injectable()
export class GalleryTentangService {
  constructor(
    @InjectRepository(GalleryTentangEntity)
    private galleryHomeRepository: Repository<GalleryTentangEntity>,
  ) {}

  async findAllGallery(): Promise<GalleryTentangEntity[]> {
    return await this.galleryHomeRepository.find();
  }

  async getImage(): Promise<any> {
    try {
      const res = await axios.get(
        `${process.env.STRAPI_URL}/gallery-tentang-konselings?populate=*`,
      );
      const findImage = res.data.data.map((item: any) => {
        const imageUrl = item.attributes?.image?.data?.attributes?.url;
        return {
          id: item.id,
          createdAt: item.attributes.createdAt,
          updatedAt: item.attributes.updatedAt,
          publishedAt: item.attributes.publishedAt,
          header: item.attributes.header,
          text: item.attributes.text,
          body: item.attributes.body,
          title: item.attributes.title,
          imageUrl: imageUrl ? `http://localhost:1337${imageUrl}` : null,
        };
      });
      return findImage;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('failed');
    }
  }

  async findAllGalleryWithImage(): Promise<GalleryTentangEntity[]> {
    const findAllGallery = await this.findAllGallery();
    const getImage = await this.getImage();

    const merge = findAllGallery.map((item) => {
      const image = getImage.find((img: any) => img.id == item.id);
      return {
        ...item,
        header: item.header || image?.header || '',
        text: item.text || image?.text || '',
        body: item.body || image?.body || '',
        title: item.title || image?.title || '',
        imageUrl: image ? image.imageUrl : '',
      };
    });

    // Optional: Save merged data back to database if needed
    await this.galleryHomeRepository.save(merge);

    return merge;
  }
}
