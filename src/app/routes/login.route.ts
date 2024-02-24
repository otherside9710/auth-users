import { Router, Request, Response, NextFunction } from 'express';
import container from '@app/dependency-injection';
import LoginController from '@app/controllers/login/find/LoginController';

export const register = (router: Router) => {
  const loginController: LoginController = container.get('Controller.Login');

  router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    return loginController.run(req, res, next);
  });
};
