import { Component, OnInit } from '@angular/core';
import {Game} from "../../shared/game.model";
import {GamesService} from "../../shared/games.service";

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {
  public gameList: Game[] | undefined;
  public gameDetail: Game | undefined;

  constructor(private gamesService: GamesService) {
    this.gameList = gamesService.games;
  }

  onGameDetail($event: Game) {
    this.gameDetail = $event;
  }

  ngOnInit(): void {
    console.log("toto");
    console.log(this.gameList);
  }
}
