import { Component, OnInit } from '@angular/core';
import { Commercial } from 'src/app/models/Commercial/commercial';
import { Formateur } from 'src/app/models/Formateur/formateur';
import { Participant } from 'src/app/models/Participant/participant';
import { Utilisateur } from 'src/app/models/Utilisateur/utilisateur';
import { CommercialService } from 'src/app/services/Commercial/commercial.service';
import { FormateurService } from 'src/app/services/Formateur/formateur.service';
import { ParticipantService } from 'src/app/services/Participant/participant.service';
import { UtilisateurService } from 'src/app/services/Utilisateur/utilisateur.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  

  constructor(private utilisateurService:UtilisateurService, private commercialService:CommercialService, private formateurService:FormateurService,
    private participantService:ParticipantService,
    ) {}


    utilisateurLocal!:Utilisateur;
    commercialLocal!:Commercial;
    formateurLocal!:Formateur;
    participantLocal!:Participant;
    roleConnected!:string;
    idConnected!:number;


  ngOnInit(): void {
    
    this.getRoleConnected()
    console.log(this.roleConnected)


  }




  /*
      Verifier les ID dans la base de donnée !! 
  */

  /*

    formateurParId() {
      this.formateurService.parId(4).subscribe(
        response => {
          this.formateurLocal = response;
          
          this.roleConnected = "Formateur";
          sessionStorage.setItem("roleConnected", JSON.stringify(this.formateurLocal.role.nom))
        }
      )
    }

  */

  getRoleConnected() {
   
    let roleConstante = sessionStorage.getItem("roleConnected");
    if(roleConstante !== null) {
      this.roleConnected = roleConstante;
    }

  }

  etreFormateur() {
    this.roleConnected = "Formateur";
    sessionStorage.setItem("roleConnected", this.roleConnected);
    this.idConnected = 4;
    sessionStorage.setItem("idConnected", String(this.idConnected) );
  }

  etreCommercial() {
    this.roleConnected = "Commercial";
    sessionStorage.setItem("roleConnected", this.roleConnected);
    this.idConnected = 8;
    sessionStorage.setItem("idConnected", String(this.idConnected) );
  }

  etreAdmin() {
    this.roleConnected = "Administrateur";
    sessionStorage.setItem("roleConnected", this.roleConnected);
  }

  etreParticipant() {
    this.roleConnected = "Participant";
    sessionStorage.setItem("roleConnected", this.roleConnected);
    this.idConnected = 3;
    sessionStorage.setItem("idConnected", String(this.idConnected) );
  }

  etreUtilisateur() {
    this.roleConnected = "Utilisateur";
    sessionStorage.setItem("roleConnected", this.roleConnected);
    this.idConnected = 2;
    sessionStorage.setItem("idConnected", String(this.idConnected) );
  }




  




}
