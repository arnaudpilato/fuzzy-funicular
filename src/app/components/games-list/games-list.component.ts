import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../../shared/game.model";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  @Input()
  public games: Game[] | undefined;

  @Output()
  public gameClick: EventEmitter<Game> = new EventEmitter<Game>();

  constructor() { }

  ngOnInit(): void {
  }

  getGame($event: Game) {
    this.gameClick.emit($event);
  }

}
