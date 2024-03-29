import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CommercialComponent } from './components/admin/commercial/commercial.component';
import { FormateurComponent } from './components/admin/formateur/formateur.component';
import { FormationComponent } from './components/admin/formation/formation.component';
import { HistoriqueComponent } from './components/admin/historique/historique.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { PaiementComponent } from './components/admin/paiement/paiement.component';
import { ParticipantComponent } from './components/admin/participant/participant.component';
import { PersonneComponent } from './components/admin/personne/personne.component';
import { RdvComponent } from './components/admin/rdv/rdv.component';
import { RoleComponent } from './components/admin/role/role.component';
import { UtilisateurComponent } from './components/admin/utilisateur/utilisateur.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MonCompteComponent } from './components/monCompte/mon-compte/mon-compte.component';
import { PaiementsParFormationComponent } from './components/paiements-par-formation/paiements-par-formation.component';
import { ParticipantsParFormationComponent } from './components/participants-par-formation/participants-par-formation.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';

const ROUTES: Routes = [

  {path:"admin/menu",        component:  MenuComponent, canActivate:[AuthGuard]},
  {path:"admin/commercial",  component:  CommercialComponent, canActivate:[AuthGuard]},
  {path:"admin/formateur",   component:  FormateurComponent, canActivate:[AuthGuard]},
  {path:"admin/formation",   component:  FormationComponent, canActivate:[AuthGuard]},
  {path:"admin/historique",  component:  HistoriqueComponent, canActivate:[AuthGuard]},
  {path:"admin/paiement",    component:  PaiementComponent, canActivate:[AuthGuard]},
  {path:"admin/participant", component:  ParticipantComponent, canActivate:[AuthGuard]},
  {path:"admin/personne",    component:  PersonneComponent, canActivate:[AuthGuard]},
  {path:"admin/rdv",         component:  RdvComponent, canActivate:[AuthGuard]},
  {path:"admin/utilisateur", component:  UtilisateurComponent, canActivate:[AuthGuard]},
  {path:"login", component:LoginComponent},

 /* {path:"commercial-rdv", component: }*/


  {path:"admin/role", component:  RoleComponent, canActivate:[AuthGuard]},
  {path:"participants-par-formation/:id", component: ParticipantsParFormationComponent, canActivate:[AuthGuard]},
  {path:"paiements-par-formation/:id", component: PaiementsParFormationComponent, canActivate:[AuthGuard]},
  {path:"mon-compte/:id", component:  MonCompteComponent, canActivate:[AuthGuard]},
  {path:"upgrade", component:  UpgradeComponent, canActivate:[AuthGuard]},



  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
