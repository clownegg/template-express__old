import {todoRepository} from '@/repositories';

export const getAll = async () => {
  try {
    return await todoRepository.getAll();
  } catch (error) {
    throw error;
  }
};
