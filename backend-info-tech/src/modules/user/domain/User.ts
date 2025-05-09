export class User {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static create(data: { name: string; email: string; password: string }) {
    return new User(data.name, data.email, data.password);
  }
}
