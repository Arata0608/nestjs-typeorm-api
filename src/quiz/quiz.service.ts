import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { quizDto } from './quiz.dto';
import { QuizEntity } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizEntity)
    private quizRepository: Repository<QuizEntity>
  ) {}

  async showall() {
    return await this.quizRepository.find();
  }

  async create(data: quizDto) {
    const quiz = await this.quizRepository.create(data);

    await this.quizRepository.save(quiz);
    return quiz;
  }

  async read(id: string) {
    return await this.quizRepository.findOne({where: {id: id}});
  }

  async update(id: string, data: Partial<quizDto>) {
    await this.quizRepository.update({ id }, data);
    return await this.quizRepository.findOne({ id });
  }

  async destroy(id: string) {
    await this.quizRepository.delete([id]);
    return { deleted: "true" };
  }
}
