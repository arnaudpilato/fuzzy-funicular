import { Routes } from '@angular/router';

import {GameCreatePageComponent} from "./pages/game-create-page/game-create-page.component";
import {GamesPageComponent} from "./pages/games-page/games-page.component";

const ROUTES: Routes = [
  { path: 'games', component: GamesPageComponent},
  { path: 'create', component: GameCreatePageComponent}
]

export { ROUTES };

