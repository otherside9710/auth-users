import StatusCodes from 'http-status-codes';
import { BaseError } from '@context/shared/domain/class/BaseError';

export class GenericNotFoundError extends BaseError {
  constructor(message: string, status: number = StatusCodes.NOT_FOUND, info: { error: string } = { error: message }) {
    super(message, status, info);
  }
}
