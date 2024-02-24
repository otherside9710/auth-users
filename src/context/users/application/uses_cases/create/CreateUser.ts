import User from '@context/users/domain/class/User';
import { IUserRepository } from '@context/users/domain/contracts/IUserRepository';

export class CreateUser {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async run(user: User): Promise<void> {
    await this.repository.createUser(user);
  }
}
