export class Veiculo {
  constructor(
    public props: {
      id: number;
      placa: string;
      chassi: string;
      renavam: string;
      modelo: string;
      ano: string;
    }
  ) {}
}
