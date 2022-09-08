import { prisma } from "../config/database";
import { QuestionInsertData } from "../types/questionTypes";

export async function insert(question: QuestionInsertData) {
  const result = await prisma.questions.create({
    data: {
      question: question.question,
      askedBy: question.askedBy,
    },
  });

  return result;
}

export async function getAll() {
  const questions = await prisma.questions.findMany({
    select: {
      id: true,
      askedBy: true,
      question: true,
      createdAt: true,
    },
  });

  return questions;
}

export async function getById(id: number) {
  const question = await prisma.questions.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      askedBy: true,
      question: true,
      createdAt: true,
      Answers: {
        select: {
          answeredBy: true,
          answer: true,
          createdAt: true,
        },
      },
    },
  });

  return question;
}
