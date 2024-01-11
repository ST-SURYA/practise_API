import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photos } from 'src/entity/Photos';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photos) private PhotosRepository: Repository<Photos>,
  ) {}

  uploadImg(file) {
    const newImage = this.PhotosRepository.create({
      name: file.filename,
      createdAt: new Date(),
    });
    return this.PhotosRepository.save(newImage);
  }
}
