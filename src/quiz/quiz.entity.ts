import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("quiz")
export class QuizEntity {
  @PrimaryGeneratedColumn("uuid") id: string;
  @CreateDateColumn() created: Date;
  @Column("text") question: string;
  @Column("text") answer: string;
}