import { Answer } from "./answerTypes";

export interface Question {
  id: number;
  question: string;
  askedBy: string;
  Answers: Answer[];
  createdAt: Date;
  updatedAt: Date;
}

export type QuestionInsertData = Omit<
  Question,
  "id" | "createdAt" | "updatedAt"
> & { answer: string };
