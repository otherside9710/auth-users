import User from '@context/users/domain/class/User';
import { IUserRepository } from '@context/users/domain/contracts/IUserRepository';

export class GetAllUsers {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async run(): Promise<User[]> {
    const serializedUsers: User[] = [];

    const users = await this.repository.getAllUsers();

    for (const user of users) {
      serializedUsers.push({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
    }

    return serializedUsers;
  }
}
