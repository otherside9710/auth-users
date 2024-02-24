import { Request, Response, NextFunction } from 'express';
import { BaseController } from '@app/impl/BaseController';
import { LoginService } from '@context/login/infrastructure/services/LoginService';
export default class LoginController implements BaseController {
  constructor(private loginService: LoginService) {}

  async run(req: Request, res: Response, _next: NextFunction) {
    const {token, status} = await this.loginService.login(req.body)

    res.status(status).send({token})
  }
}
