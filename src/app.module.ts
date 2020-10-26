import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [TypeOrmModule.forRoot(), QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
