import path from 'path';
import { fileURLToPath } from 'url';

export const defineDirAndFilenameConstants = (filePath) => {
  const __filename = fileURLToPath(filePath);
  const __dirname = path.dirname(__filename);

  return { __dirname, __filename };
};
