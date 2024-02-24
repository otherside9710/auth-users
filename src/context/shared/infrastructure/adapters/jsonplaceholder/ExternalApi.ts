import config from '@app/config';
import AxiosClientFactory from '@context/shared/infrastructure/clients/AxiosClientFactory';
import { HTTP_VERBS } from '@context/shared/infrastructure/constants/HttpVerbs';
import User from '@context/users/domain/class/User';
import { AxiosResponse } from 'axios';

export default class ExternalApi extends AxiosClientFactory {
  private headers: any = {
    'Content-Type': 'application/json',
  };
  private BASE_URL: string = config.EXTERNAL_CRUD_API;
  private CREATE_USER_PATH: string = `${this.BASE_URL}/users`;

  async create(user: User): Promise<AxiosResponse<any>> {
    return this.invoke(this.CREATE_USER_PATH, HTTP_VERBS.POST, this.headers, user);
  }

  async getAll(): Promise<AxiosResponse<any>> {
    return this.invoke(this.CREATE_USER_PATH, HTTP_VERBS.GET, this.headers);
  }
}
