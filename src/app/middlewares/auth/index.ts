import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import WinstonInfoLogger from '@context/shared/infrastructure/impl/WinstonInfoLogger';
import { verify } from 'jsonwebtoken';

export default class AuthValidator {
  static verify(req: any, res: Response, next: NextFunction) {
    const headers = req.headers;

    if (!headers.authorization) {
      WinstonInfoLogger.print(`Auth: No authorization header - URL: ${req.url}`, 'error')
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'No authorization header' })
    }

    verify(headers.authorization, 'secret_key', (err: any, user: any) => {
      if (err) {
        return res.status(StatusCodes.UNAUTHORIZED).send({
          message: 'Invalid Token, Not Authorized',
        })
      }
      req.user = user;
      next();
    });
  }
}
