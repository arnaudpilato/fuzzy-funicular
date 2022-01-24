import { Injectable } from '@angular/core';
import {Game} from "./game.model";
import {GAMES} from "../games-mock";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  public games: Game[] = GAMES;


  constructor() { }

  public addGame($event: Game) {
    return this.games.push($event);
  }
}
