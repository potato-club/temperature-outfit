import { RawBodyRequest } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Fields, File, Files, Formidable } from 'formidable';
import { PassThrough } from 'stream';
import { storageClient } from '../storage';

const uploadStream = (file: { newFilename: string }) => {
  const pass = new PassThrough();

  storageClient.from('image').upload(file.newFilename, pass, {
    cacheControl: '3600',
    upsert: false,
  });

  return pass;
};

export const filesParser = async (
  req: RawBodyRequest<Request>,
  res: Response,
  next: NextFunction,
) => {
  const data = await new Promise<{
    fields: Fields;
    files: Files;
  }>((resolve, reject) => {
    const formidable = new Formidable({
      // filename: () => cuid(),
      fileWriteStreamHandler: uploadStream as any,
    });

    req.body = req.rawBody;

    formidable.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }

      resolve({ fields, files });
    });
  });

  if (data.files.image) {
    const image = data.files.image as File;

    const imageUrl = storageClient
      .from('image')
      .getPublicUrl(image.newFilename);

    req.filePath = imageUrl.data?.publicURL ?? '';
  } else {
    switch (data.fields.image) {
      case 'null':
        req.filePath = null;
        break;
      case 'undefined':
      default:
        req.filePath = undefined;
        break;
    }
  }

  req.body = data.fields;

  next();
};
