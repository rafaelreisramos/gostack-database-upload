import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  folder: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(resquest, file, callback) {
      const prefixHash = crypto.randomBytes(10).toString('hex');
      const filename = `${prefixHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
