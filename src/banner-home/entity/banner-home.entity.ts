import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('banner-homes')
export class BannerHomeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  header: string;

  @Column()
  desc: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column({ type: 'json', nullable: true })
  banner: any; // Atau Anda dapat mendefinisikan struktur BannerEntity jika diperlukan
}
