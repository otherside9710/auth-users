import { EntityTarget, FindOptionsWhere, Repository } from 'typeorm';
import { AppDataSource } from '@context/shared/infrastructure/persistence/typeorm/conf/typeorm.config';
import { BaseEntity } from '@context/shared/infrastructure/persistence/typeorm/entities/BaseEntity';
import { IBaseRepository } from '@context/shared/domain/contracts/IBaseRepository';

export abstract class BaseRepository<T extends BaseEntity> implements IBaseRepository<T> {
  protected repository: Repository<T>;

  constructor(private Entity: EntityTarget<T>) {
    this.repository = AppDataSource.getRepository(this.Entity);
  }

  async getByEmail(email: string): Promise<T> {
    const criteria = { where: { email: email } as unknown as FindOptionsWhere<T> };
    const entity = await this.repository.findOne(criteria);
    return entity as T;
  }
}
