import httpStatus from 'http-status';
import { Request, Response, NextFunction } from 'express';
import { BaseController } from '@app/impl/BaseController';
import { UserService } from '@context/users/infrastructure/services/UserService';
export default class CreateUserController implements BaseController {
  constructor(private userService: UserService) {}

  async run(req: Request, res: Response, _next: NextFunction) {
    await this.userService.createUser(req.body)

    res.status(httpStatus.CREATED).send({message: 'user created successfully!'})
  }
}
