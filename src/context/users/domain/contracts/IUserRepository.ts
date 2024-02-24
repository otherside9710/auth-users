import User from '@context/users/domain/class/User';

export interface IUserRepository {
  createUser(user: User): Promise<void>;
  getAllUsers(): Promise<User[]>;
}
