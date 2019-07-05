import Joi from 'joi';
import { CoreError } from './CoreError';
import { HttpCode } from '../HttpCode';

export class EntityValidationError extends CoreError {
  httpCode = HttpCode.UNPROCESSABLE_ENTITY;
  validationError: Joi.ValidationError;

  constructor(entityName: string, validationError: Joi.ValidationError) {
    super(`Error processing entity ${entityName}`);
    this.name = EntityValidationError.name;
  }
}