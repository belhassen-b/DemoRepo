import { DogSpecie } from "../enums/DogBreeds";

export default class Dog {
  private static _count: number = 0;
  readonly id: number;
  constructor(readonly name: string, readonly breed: DogSpecie, readonly age: number) {
    this.id = ++Dog._count
    }
}