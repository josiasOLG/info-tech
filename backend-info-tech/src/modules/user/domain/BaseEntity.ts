export abstract class BaseEntity {
  readonly id: string;

  protected constructor(id: string) {
    this.id = id;
  }
}
