import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import { GameCreatePageComponent } from './pages/game-create-page/game-create-page.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    GamesListComponent,
    NavBarComponent,
    GamesPageComponent,
    GameCreatePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
