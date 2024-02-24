import StatusCodes from 'http-status-codes';
import { BaseError } from '@context/shared/domain/class/BaseError';

export class GenericBadRequestError extends BaseError {
  constructor(
    message: string,
    status: number = StatusCodes.BAD_REQUEST,
    info: { error: string } = {error: message},
  ) {
    super(message, status, info);
  }
}
