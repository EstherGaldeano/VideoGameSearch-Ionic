
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'videogames', pathMatch: 'full' },
  { path: 'videogames', loadChildren: './pages/videogames/videogames.module#VideogamesPageModule' },
  { path: 'videogames/:id', loadChildren: './pages/videogame-details/videogame-details.module#VideogameDetailsPageModule' }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
