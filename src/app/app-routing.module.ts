import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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

  {path:"admin/menu",        component:  MenuComponent},
  {path:"admin/commercial",  component:  CommercialComponent},
  {path:"admin/formateur",   component:  FormateurComponent},
  {path:"admin/formation",   component:  FormationComponent},
  {path:"admin/historique",  component:  HistoriqueComponent},
  {path:"admin/paiement",    component:  PaiementComponent},
  {path:"admin/participant", component:  ParticipantComponent},
  {path:"admin/personne",    component:  PersonneComponent},
  {path:"admin/rdv",         component:  RdvComponent},
  {path:"admin/utilisateur", component:  UtilisateurComponent},
  {path:"login", component:LoginComponent},

 /* {path:"commercial-rdv", component: }*/


  {path:"admin/role",        component:  RoleComponent},
  {path:"participants-par-formation/:id",component: ParticipantsParFormationComponent},
  {path:"paiements-par-formation/:id",   component: PaiementsParFormationComponent},
  {path:"mon-compte/:id",        component:  MonCompteComponent},
  {path:"upgrade", component:  UpgradeComponent},



  
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
