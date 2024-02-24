import { CreateUser } from '@context/users/application/uses_cases/create/CreateUser';
import { GetAllUsers } from '@context/users/application/uses_cases/find/GetAllUsers';
import User from '@context/users/domain/class/User';

export class UserService {
  constructor(private createUserUseCase: CreateUser, private getAllUsersUseCase: GetAllUsers) {}

  async createUser(user: User): Promise<void> {
    await this.createUserUseCase.run(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.getAllUsersUseCase.run();
  }
}
