import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Game} from "../../shared/game.model";
import {GamesService} from "../../shared/games.service";

@Component({
  selector: 'app-game-create-page',
  templateUrl: './game-create-page.component.html',
  styleUrls: ['./game-create-page.component.scss']
})
export class GameCreatePageComponent implements OnInit {
  game: FormGroup = new FormGroup({})
  newGame = Game;

  constructor(private fb: FormBuilder, private gamesService: GamesService) { }

  ngOnInit(): void {
    this.game = this.fb.group({
      name: ["", Validators.required],
      cover: ["", Validators.required],
      rating: ["", Validators.required]
    });
  }

  public addGame() {
    console.log(this.game.value);
    this.gamesService.addGame(this.game.value);
    this.newGame = this.game.value;
  }
}
