import Credentials from '@context/login/domain/class/Credentials';

export interface ICredentialRepository {
  getUserByEmail(email: string): Promise<Credentials>;
}
