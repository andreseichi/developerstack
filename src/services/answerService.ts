import { insert } from "../repositories/answerRepository";
import { getById } from "../repositories/questionRepository";
import { AnswerInsertData } from "../types/answerTypes";

export async function createAnswerService(
  id: number,
  answer: AnswerInsertData
) {
  const question = await getById(id);

  if (!question) {
    throw {
      type: "not_found",
    };
  }

  const answerCreated = await insert(id, answer);

  if (!answerCreated) {
    throw {
      type: "not_found",
    };
  }

  return answerCreated;
}
