import { BaseRepository } from '@context/shared/infrastructure/persistence/typeorm/repositories/BaseRepository';
import CredentialsEntity from '../entities/CredentialsEntity';
import { ICredentialRepository } from '@context/shared/domain/contracts/ICredentialRepository';
import Credentials from '@context/login/domain/class/Credentials';

export class CredentialsRepository extends BaseRepository<CredentialsEntity> implements ICredentialRepository {
  constructor() {
    const entity = CredentialsEntity;
    super(entity);
  }
  async getUserByEmail(email: string): Promise<Credentials> {
    const credentials = await this.getByEmail(email);
    if (!credentials) {
      throw new Error(`Error: -> <CredentialsRepository> getUserByEmail - credentials: ${JSON.stringify(credentials)}`);
    }
    return credentials;
  }
}
