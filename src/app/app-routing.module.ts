import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { ForfaitsmexiqueComponent } from './forfaitsmexique/forfaitsmexique.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DepartmontrealComponent } from './departmontreal/departmontreal.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
  { path: 'apropos', component: AproposComponent },
  { path: 'forfaitsmexique', component: ForfaitsmexiqueComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'departmontreal', component: DepartmontrealComponent },
  { path: 'administration', component: AdministrationComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }