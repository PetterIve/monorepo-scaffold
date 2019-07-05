import { User } from './User';

const DefaultUser: User = {
  email: "test@email.com",
  familyName: "John",
  givenName: "Doe"
};

export const getUserMock = (override?: Partial<User>) => {
  return {
    ...DefaultUser,
    ...override
  }
};
