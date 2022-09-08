import { Request, Response } from "express";
import { createAnswerService } from "../services/answerService";
import {
  createQuestionService,
  getAllQuestionsService,
  getQuestionService,
} from "../services/questionService";

export async function createQuestion(req: Request, res: Response) {
  const question = req.body;

  const result = await createQuestionService(question);

  return res.status(201).json(result);
}

export async function createAnswer(req: Request, res: Response) {
  const id = Number(req.params.id);
  const answer = req.body;

  const result = await createAnswerService(id, answer);

  return res.status(201).json(result);
}

export async function get(req: Request, res: Response) {
  const questions = await getAllQuestionsService();

  return res.send({ questions });
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);

  const question = await getQuestionService(id);

  return res.send(question);
}
