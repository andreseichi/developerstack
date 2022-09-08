export interface Answer {
  id: number;
  answer: string;
  answeredBy: string;
  questionId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type AnswerInsertData = Omit<
  Answer,
  "id" | "createdAt" | "updatedAt" | "questionId"
>;
