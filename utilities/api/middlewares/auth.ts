import type { NextApiRequest, NextApiResponse } from 'next';
import type { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import type { Middleware } from 'next-connect';

export type NextApiRequestWithSession = NextApiRequest & {
  session: Session;
};

export const authenticateHandler: Middleware<
  NextApiRequestWithSession,
  NextApiResponse
> = async (req, res, next) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    return res.status(401).end();
  }

  req.session = session;

  next();
};
