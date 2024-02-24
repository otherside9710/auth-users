import httpStatus from 'http-status';
import { Request, Response, NextFunction } from 'express';
import { BaseController } from '@app/impl/BaseController';
import { UserService } from '@context/users/infrastructure/services/UserService';
export default class GetAllUsersController implements BaseController {
  constructor(private userService: UserService) {}

  async run(_req: Request, res: Response, _next: NextFunction) {
    const users = await this.userService.getAllUsers()

    res.status(httpStatus.OK).send(users)
  }
}
