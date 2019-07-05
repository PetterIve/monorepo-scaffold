import Joi from 'joi';

export const UserSchema = Joi.object({
  email: Joi.string().email(),
  familyName: Joi.string(),
  givenName: Joi.string(),
});
