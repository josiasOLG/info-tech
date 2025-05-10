export class Result<T = unknown> {
  constructor(
    public success: boolean,
    public message: string,
    public data?: T,
  ) {}

  static ok<T>(
    data?: T,
    message = 'Operação realizada com sucesso',
  ): Result<T> {
    return new Result(true, message, data);
  }

  static fail<T>(message = 'Erro na operação', data?: T): Result<T> {
    return new Result(false, message, data);
  }
}
