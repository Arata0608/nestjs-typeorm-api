import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { quizDto } from './quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get()
  showAllQuiz() {
    return this.quizService.showall();
  }

  @Post()
  createQuiz(@Body() data: quizDto) {
    return this.quizService.create(data);
  }

  @Get(":id")
  readQuiz(@Param("id") id: string) {
    return this.quizService.read(id);
  }

  @Put(":id")
  updateQuiz(@Param("id") id: string, @Body() data: Partial<quizDto>) {
    return this.quizService.update(id, data);
  }

  @Delete(":id")
  destroyQuiz(@Param("id") id: string) {
    return this.quizService.destroy(id);
  }
}
