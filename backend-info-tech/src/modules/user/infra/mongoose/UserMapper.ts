import { User } from "../../domain";
import { UserModelClass } from "./UserModel";

export class UserMapper {
  static toDomain(doc: UserModelClass): User {
    return new User(doc.name, doc.email, doc.password);
  }

  static toPersistence(user: User): Partial<UserModelClass> {
    return {
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }
}
