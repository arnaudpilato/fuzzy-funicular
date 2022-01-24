import { Routes } from '@angular/router';

import {GamesListComponent} from "./components/games-list/games-list.component";
import {GameCreatePageComponent} from "./pages/game-create-page/game-create-page.component";

const ROUTES: Routes = [
  { path: 'games', component: GamesListComponent},
  { path: 'create', component: GameCreatePageComponent}
]

export { ROUTES };

