import {getRepository} from 'typeorm';
import HttpStatus from 'http-status-codes';

import {Todo} from '@/models';

export const getAll = async () => {
  try {
    return await getRepository(Todo).find();
  } catch (error) {
    throw {
      statusCode: HttpStatus.BAD_REQUEST,
      message: error.message,
    };
  }
};
