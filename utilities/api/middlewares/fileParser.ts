import cuid from 'cuid';
import { Fields, File, Files, Formidable } from 'formidable';
import type { NextApiResponse } from 'next';
import { Middleware } from 'next-connect';
import { PassThrough } from 'stream';
import { ApiRequest } from '../../../types';
import { storageClient } from '../storage';

const uploadStream = (file: { newFilename: string }) => {
  const pass = new PassThrough();

  storageClient.from('image').upload(file.newFilename, pass, {
    cacheControl: '3600',
    upsert: false,
  });

  return pass;
};

export const filesParser: Middleware<ApiRequest, NextApiResponse> = async (
  req,
  res,
  next,
) => {
  const data = await new Promise<{
    fields: Fields;
    files: Files;
  }>((resolve, reject) => {
    const formidable = new Formidable({
      filename: () => cuid(),
      fileWriteStreamHandler: uploadStream as any,
    });

    formidable.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }

      resolve({ fields, files });
    });
  });

  console.log(data.files);
  console.log(data.fields);

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
