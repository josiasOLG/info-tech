import { CreateUserDTO } from "../dto";
import { User } from "../../domain";
import { IUserRepository } from "../../domain";

export class CreateUser {
  constructor(private repo: IUserRepository) {}

  async execute(data: CreateUserDTO) {
    const user = User.create(data);
    return await this.repo.create(user);
  }

  async list() {
    return await this.repo.findAll();
  }
}
