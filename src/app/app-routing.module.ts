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
import { PaiementsParFormationComponent } from './components/paiements-par-formation/paiements-par-formation.component';
import { ParticipantsParFormationComponent } from './components/participants-par-formation/participants-par-formation.component';

const ROUTES: Routes = [

  {path:"adminMenu",        component:  MenuComponent},
  {path:"adminCommercial",  component:  CommercialComponent},
  {path:"adminFormateur",   component:  FormateurComponent},
  {path:"adminFormation",   component:  FormationComponent},
  {path:"adminHistorique",  component:  HistoriqueComponent},
  {path:"adminPaiement",    component:  PaiementComponent},
  {path:"adminParticipant", component:  ParticipantComponent},
  {path:"adminPersonne",    component:  PersonneComponent},
  {path:"adminRdv",         component:  RdvComponent},
  {path:"adminUtilisateur", component:  UtilisateurComponent},

 /* {path:"commercial-rdv", component: }*/

  {path:"adminRole", component:  RoleComponent},
  {path:"participants-par-formation/:id", component: ParticipantsParFormationComponent},
  {path:"paiements-par-formation/:id", component: PaiementsParFormationComponent}




  
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
