export class Game {
  public name: string;
  public cover: string;
  public rating: number;


  constructor(name: string, cover: string, rating: number) {
    this.name = name;
    this.cover = cover;
    this.rating = rating;
  }
}
