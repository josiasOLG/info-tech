export class Veiculo {
  constructor(
    public readonly _id: string,
    public readonly placa: string,
    public readonly chassi: string,
    public readonly renavam: string,
    public readonly modelo: string,
    public readonly ano: string,
  ) {}
}
