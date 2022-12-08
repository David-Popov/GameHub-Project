import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddGameComponent } from './add-game/add-game.component';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { AppComponent } from './app.component';
import { ChosenGameComponent } from './chosen-game/chosen-game.component';
import { ContentComponent } from './content/content.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { FavouriteGamesComponent } from './favourite-games/favourite-games.component';
import { GameComponent } from './game/game.component';
import { GamesByGenreComponent } from './games-by-genre/games-by-genre.component';
import { GamesByPlatformComponent } from './games-by-platform/games-by-platform.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'game/:id',
    component: GameComponent
  },
  {
    path: 'admin',
    component: AllGamesComponent
  },
  {
    path: 'admin/edit',
    component: EditGameComponent
  },
  {
    path: 'admin/delete',
    component: EditGameComponent
  },
  {
    path: 'add',
    component: AddGameComponent
  },
  {
    path: 'platform',
    component: GamesByPlatformComponent
  },
  {
    path: 'game/genre/:id',
    component: GamesByGenreComponent
  },
  {
    path: 'chosenGame/:id',
    component: ChosenGameComponent
  },
  {
    path: 'game/platform/:id',
    component: GamesByPlatformComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'favourite',
    component: FavouriteGamesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
