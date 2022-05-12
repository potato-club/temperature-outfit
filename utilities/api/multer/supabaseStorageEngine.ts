import multer from 'multer';
import { storageClient } from '../storage';

type Options = {
  bucket: string;
  filename?: (req: Express.Request, file: Express.Multer.File) => string;
};

export class SupabaseStorageEngine implements multer.StorageEngine {
  private bucket: string;
  private filename: (req: Express.Request, file: Express.Multer.File) => string;

  constructor(options: Options) {
    this.bucket = options.bucket;
    this.filename = options.filename ?? ((_, file) => file.originalname);
  }

  async _handleFile(
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error?: any, info?: Partial<Express.Multer.File>) => void,
  ) {
    const filename = this.filename(req, file);

    const { error } = await storageClient
      .from(this.bucket)
      .upload(filename, file.stream, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      return callback(error);
    }

    const { publicURL } = storageClient
      .from(this.bucket)
      .getPublicUrl(filename);

    callback(null, { path: publicURL ?? undefined });
  }

  async _removeFile(
    req: Express.Request,
    file: Express.Multer.File & { name: string },
    callback: (error: Error | null) => void,
  ) {
    const { error } = await storageClient.from(this.bucket).remove([file.name]);

    if (error) {
      return callback(error);
    }

    callback(null);
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
