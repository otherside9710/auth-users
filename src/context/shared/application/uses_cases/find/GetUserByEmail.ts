import Credentials from '@context/login/domain/class/Credentials';
import { ICredentialRepository } from '@context/shared/domain/contracts/ICredentialRepository';
import { decodeBase64 } from '@context/shared/infrastructure/utils';

export class GetUserByEmail {
  private repository: ICredentialRepository;

  constructor(repository: ICredentialRepository) {
    this.repository = repository;
  }

  async run(email: string): Promise<Credentials> {
    const credentials = await this.repository.getUserByEmail(email);

    return new Credentials(credentials.email, decodeBase64(credentials.password));
  }
}
