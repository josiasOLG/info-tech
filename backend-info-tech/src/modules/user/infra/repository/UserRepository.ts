import { UserModel } from "../mongoose/UserModel";
import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";

export class UserRepository implements IUserRepository {
  async create(data: User): Promise<User> {
    const created = await UserModel.create(data);
    return new User(
      created.name,
      created.email,
      created.password,
      created._id.toString()
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await UserModel.findOne({ email });
    if (!result) return null;
    return new User(
      result.name,
      result.email,
      result.password,
      result._id.toString()
    );
  }

  async findAll(): Promise<User[]> {
    const users = await UserModel.find();
    return users.map(
      (u) => new User(u.name, u.email, u.password, u._id.toString())
    );
  }

  async deleteById(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    const updated = await UserModel.findByIdAndUpdate(id, data, { new: true });
    if (!updated) return null;
    return new User(
      updated.name,
      updated.email,
      updated.password,
      updated._id.toString()
    );
  }
}
