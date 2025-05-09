import { User } from "./User";

export interface IUserRepository {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
}
