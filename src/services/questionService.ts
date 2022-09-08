import { getAll, getById, insert } from "../repositories/questionRepository";
import { QuestionInsertData } from "../types/questionTypes";

export async function createQuestionService(question: QuestionInsertData) {
  const questionCreated = await insert(question);

  return questionCreated;
}

export async function getAllQuestionsService() {
  const questions = await getAll();

  if (!questions) {
    throw {
      type: "not_found",
    };
  }

  const questionsFormatted = questions.map((question) => {
    return {
      ...question,
      createdAt: question.createdAt.toISOString().split("T")[0],
    };
  });

  return questionsFormatted;
}

export async function getQuestionService(id: number) {
  const question = await getById(id);

  if (!question) {
    throw {
      type: "not_found",
    };
  }

  const questionFormatted = {
    id: question.id,
    question: question.question,
    askedBy: question.askedBy,
    createdAt: question.createdAt.toISOString().split("T")[0],
    answers: question.Answers.map((answer) => {
      return {
        answer: answer.answer,
        answeredBy: answer.answeredBy,
        createdAt: answer.createdAt.toISOString().split("T")[0],
      };
    }),
  };

  return questionFormatted;
}
