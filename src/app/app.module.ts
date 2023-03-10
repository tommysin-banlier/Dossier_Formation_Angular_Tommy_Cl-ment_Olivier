import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './components/admin/utilisateur/utilisateur.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { CommercialComponent } from './components/admin/commercial/commercial.component';
import { FormateurComponent } from './components/admin/formateur/formateur.component';
import { FormationComponent } from './components/admin/formation/formation.component';
import { HistoriqueComponent } from './components/admin/historique/historique.component';
import { PaiementComponent } from './components/admin/paiement/paiement.component';
import { ParticipantComponent } from './components/admin/participant/participant.component';
import { PersonneComponent } from './components/admin/personne/personne.component';
import { RdvComponent } from './components/admin/rdv/rdv.component';
import { RouterModule, ROUTES } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { RoleComponent } from './components/admin/role/role.component';
import { ParticipantsParFormationComponent } from './components/participants-par-formation/participants-par-formation.component';
import { PaiementsParFormationComponent } from './components/paiements-par-formation/paiements-par-formation.component';
import { MonCompteComponent } from './components/monCompte/mon-compte/mon-compte.component';
import { CompteCommercialComponent } from './components/monCompte/compte-commercial/compte-commercial.component';
import { CompteFormateurComponent } from './components/monCompte/compte-formateur/compte-formateur.component';
import { CompteParticipantComponent } from './components/monCompte/compte-participant/compte-participant.component';
import { CompteUtilisateurComponent } from './components/monCompte/compte-utilisateur/compte-utilisateur.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';


@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    MenuComponent,
    CommercialComponent,
    FormateurComponent,
    FormationComponent,
    HistoriqueComponent,
    PaiementComponent,
    ParticipantComponent,
    PersonneComponent,
    RdvComponent,
    HomeComponent,
    RoleComponent,
    ParticipantsParFormationComponent,
    PaiementsParFormationComponent,
    MonCompteComponent,
    CompteCommercialComponent,
    CompteFormateurComponent,
    CompteParticipantComponent,
    CompteUtilisateurComponent,
    UpgradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }