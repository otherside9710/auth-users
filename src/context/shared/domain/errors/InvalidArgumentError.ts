import { BaseError } from '@context/shared/domain/class/BaseError';
import StatusCodes from 'http-status-codes';

export default class InvalidArgumentError extends BaseError {
  constructor(
    info: { error: string } = { error: 'invalid argument' },
    status: number = StatusCodes.BAD_REQUEST,
    message: string = 'invalid request',
  ) {
    super(message, status, info);
  }
}
