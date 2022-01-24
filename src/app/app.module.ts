import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';

import {ROUTES} from "./app.routes";
import { GameCreatePageComponent } from './pages/game-create-page/game-create-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ApiFormComponent } from './pages/api-form/api-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    GamesListComponent,
    NavBarComponent,
    GamesPageComponent,
    GameCreatePageComponent,
    ApiFormComponent
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
