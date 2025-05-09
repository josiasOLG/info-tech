import { randomUUID } from "crypto";

export class UniqueEntityID {
  private readonly value: string;

  constructor(id?: string) {
    this.value = id ?? randomUUID();
  }

  toString() {
    return this.value;
  }
}
