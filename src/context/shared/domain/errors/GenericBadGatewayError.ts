import StatusCodes from 'http-status-codes';
import { BaseError } from '@context/shared/domain/class/BaseError';

export class GenericBadGatewayError extends BaseError {
  constructor(message: string, status: number = StatusCodes.BAD_GATEWAY, info: { error: string } = { error: message }) {
    super(message, status, info);
  }
}
