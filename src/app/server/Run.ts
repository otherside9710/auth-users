import 'reflect-metadata';
import { Server } from './Server';
import config from '@app/config';
import { AppDataSource } from '@context/shared/infrastructure/persistence/typeorm/conf/typeorm.config';
import Logger from '@context/shared/infrastructure/impl/WinstonInfoLogger';

export class Run {
  server?: Server;

  async start() {
    this.server = new Server(Number(config.PORT));
    try {
      const typeORM = await AppDataSource.initialize();

      if (typeORM.isInitialized) {
        Logger.print('Connected to database!');
      }
    } catch (error) {
      Logger.print(`DB not connected -> ${JSON.stringify(error)}`, 'error');
    }
    return this.server.listen();
  }

  async stop() {
    return this.server?.stop();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }
}
