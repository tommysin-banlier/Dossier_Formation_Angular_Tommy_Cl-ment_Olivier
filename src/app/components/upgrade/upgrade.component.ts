import { Component , OnInit } from '@angular/core';
import { Participant } from 'src/app/models/Participant/participant';
import { Role } from 'src/app/models/Role/role';
import { Utilisateur } from 'src/app/models/Utilisateur/utilisateur';
import { RoleService } from 'src/app/services/Role/role.service';
import { UtilisateurService } from 'src/app/services/Utilisateur/utilisateur.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit{

  constructor (private utilisateurService:UtilisateurService, private roleService:RoleService)
  {  }
  utilisateurs!:Utilisateur[];
  utilisateurFormulaire!:Utilisateur;
  roleFormulaire!:Role;
  roles!:Role[];
  idrole!:number;

  ngOnInit(): void {
    this.chercherAll();
    this.utilisateurFormulaire = new Utilisateur;
    this.chercherAllRole();
   this.roleFormulaire = new Role;


   }

   chercherAllRole()
  {
    this.roleService.chercherAll().subscribe(
      response => this.roles = response
    )
  }


  chercherAll()
  {
    this.utilisateurService.chercherAll().subscribe(
      response => this.utilisateurs = response
    )
    
  }

  inserer()
  {
    let roleFormulaire = new Role();
    this.roleService.parId(this.idrole).subscribe(
      response=>
  {roleFormulaire=response;
    this.utilisateurFormulaire.role=roleFormulaire;
    this.utilisateurService.inserer(this.utilisateurFormulaire).subscribe();
    switch(this.utilisateurFormulaire.role.nom) { 
      case "participant": { 
        this.utilisateurService.upgradeParticipant(this.utilisateurFormulaire.id).subscribe(
          response => { 
            this.chercherAll();
            this.utilisateurFormulaire = new Utilisateur
          })
         break; 
      } 
      case "commercial": { 
        this.utilisateurService.upgradeCommercial(this.utilisateurFormulaire.id).subscribe(
          response => { 
            this.chercherAll();
            this.utilisateurFormulaire = new Utilisateur
          })
          break; 
      } 
      case "formateur": { 
        this.utilisateurService.upgradeFormateur(this.utilisateurFormulaire.id).subscribe(
          response => { 
            this.chercherAll();
            this.utilisateurFormulaire = new Utilisateur
          })
          break; 
     } 
      default: { 
         //statements; 
         break; 
      } 
   } 
    this.utilisateurFormulaire = new Utilisateur;
    this.chercherAll();
  })

    /*
    this.utilisateurService.inserer(this.utilisateurFormulaire).subscribe(
response => {
  this.chercherAll();
  this.utilisateurFormulaire = new Utilisateur;
}
    )*/
  }

  upgrade(id:number)
  {
    this.utilisateurService.parId(id).subscribe(
      response => this.utilisateurFormulaire = response
    )
  }

  upgradeParticipant(id:number)
  {
    this.utilisateurService.upgradeParticipant(id).subscribe(
      response => { 
        this.chercherAll();
        this.utilisateurFormulaire = new Utilisateur
      }
    )
  }

  upgradeCommercial(id:number)
  {
    this.utilisateurService.upgradeCommercial(id).subscribe(
      response => { 
        this.chercherAll();
        this.utilisateurFormulaire = new Utilisateur
      }
    )
  }

  upgradeFormateur(id:number)
  {
    this.utilisateurService.upgradeFormateur(id).subscribe(
      response => { 
        this.chercherAll();
        this.utilisateurFormulaire = new Utilisateur
      }
    )
  }

}
