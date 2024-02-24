import { IUserRepository } from '@context/users/domain/contracts/IUserRepository';
import User from '@context/users/domain/class/User';
import ExternalApi from '@context/shared/infrastructure/adapters/jsonplaceholder/ExternalApi';
import { GenericBadGatewayError } from '@context/shared/domain/errors/GenericBadGatewayError';
import httpStatus from 'http-status';

export class UserRepository extends ExternalApi implements IUserRepository {
  async createUser(user: User): Promise<void> {
    const { status } = await this.create(user);

    if (status !== httpStatus.CREATED) throw new GenericBadGatewayError(`Error on connect to external API`);
  }

  async getAllUsers(): Promise<User[]> {
    const { status, data } = await this.getAll();

    if (status !== httpStatus.OK) throw new GenericBadGatewayError(`Error on connect to external API`);

    return data;
  }
}
