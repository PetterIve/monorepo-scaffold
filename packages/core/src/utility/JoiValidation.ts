import Joi from 'joi';
import { EntityValidationError } from '../errors';

const defaultOptions: Joi.ValidationOptions = {
  abortEarly: false,
  presence: 'required',
}

export abstract class JoiValidation<T> {
  entityName: string;
  schema: Joi.Schema;

  constructor(schema: Joi.Schema, entityName: string) {
    this.schema = schema;
    this.entityName = entityName;
  }

  validateFully = (model: any): T => {
    const result = Joi.validate(model, this.schema.options(defaultOptions));
    if (result.error) {
      throw new EntityValidationError(this.entityName, result.error);
    }
    return result.value as T;
  }

  validatePartially = (model: any): T => {
    const result = Joi.validate(model, this.schema.options({...defaultOptions, presence: 'optional'}))

    if (result.error) {
      throw new EntityValidationError(this.entityName, result.error);
    }
    return result.value as T;
  }

}