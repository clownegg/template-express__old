import {Request, Response, NextFunction} from 'express';
import {todoService} from '@/services';

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await todoService.getAll();

    res.json(todos);
  } catch (error) {
    next(error);
  }
};
