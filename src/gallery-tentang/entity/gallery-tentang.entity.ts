import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'gallery_tentang_konselings' })
export class GalleryTentangEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  publishedAt: Date;

  @Column({ nullable: true })
  header: string;

  @Column({ nullable: true })
  text: string;

  @Column({ nullable: true })
  body: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  imageUrl: string;
}
