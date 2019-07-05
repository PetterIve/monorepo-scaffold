import { UserSchema } from './UserSchema';
import { User } from './User';
import { JoiValidation } from '../../utility';

export class UserValidation extends JoiValidation<User> {
  constructor() {
    super(UserSchema, 'User');
  }
}