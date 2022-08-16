import type { NextApiRequest, NextApiResponse } from 'next';
import type { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import type { Middleware } from 'next-connect';

export type NextApiRequestWithSession = NextApiRequest & {
  session: { user: { email: string } };
};

export const authenticateHandler: Middleware<
  NextApiRequestWithSession,
  NextApiResponse
> = async (req, res, next) => {
  req.session = { user: { email: 'woalswhwh@gmail.com' } };

  next();
};
