import _ from 'lodash';
import {Request, Response, NextFunction} from 'express';
import HttpStatus from 'http-status-codes';

export const isNumber = (
  param: number,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params[param], 10);

  if (_.isNaN(id)) {
    next({
      statusCode: HttpStatus.BAD_REQUEST,
      message: `${id} must be a positive number`,
    });
  }
  next();
};

export const isString = (
  param: string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const str = req.params[param];

  if (!_.isString(str)) {
    next({
      statusCode: HttpStatus.BAD_REQUEST,
      message: `${str} must be string`,
    });
  }
  next();
};
