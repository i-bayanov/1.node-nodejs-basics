import { access, constants } from 'fs/promises';

export const checkPathExistence = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};
