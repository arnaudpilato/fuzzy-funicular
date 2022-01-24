import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../shared/game.model";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  @Input()
  public game: Game | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
