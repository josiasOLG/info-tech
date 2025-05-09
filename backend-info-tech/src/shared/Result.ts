export class Result<T> {
  public isSuccess: boolean;
  public error?: string;
  private readonly _value?: T;

  private constructor(isSuccess: boolean, value?: T, error?: string) {
    this.isSuccess = isSuccess;
    if (isSuccess && error)
      throw new Error("Erro: sucesso com mensagem de erro");
    if (!isSuccess && !error)
      throw new Error("Erro: falha sem mensagem de erro");

    this._value = value;
    this.error = error;
  }

  public get value(): T {
    if (!this.isSuccess)
      throw new Error("Não é possível obter valor de resultado com falha.");
    return this._value as T;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, value);
  }

  public static fail<U>(error: string): Result<U> {
    return new Result<U>(false, undefined, error);
  }
}
