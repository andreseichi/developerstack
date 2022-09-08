import { prisma } from "../config/database";
import { AnswerInsertData } from "../types/answerTypes";

export async function insert(id: number, answer: AnswerInsertData) {
  const result = await prisma.answers.create({
    data: {
      answer: answer.answer,
      answeredBy: answer.answeredBy,
      questionId: id,
    },
  });

  return result;
}
