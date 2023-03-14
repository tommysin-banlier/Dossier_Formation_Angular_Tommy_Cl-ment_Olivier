import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})

export class MonCompteComponent implements OnInit {
  
  roleConnected!:string;

  ngOnInit(): void {
   
    this.getRoleConnected()


  }


  getRoleConnected() {
   
    let roleConstante = sessionStorage.getItem("roleConnected");
    if(roleConstante !== null) {
      this.roleConnected = roleConstante;
    }

    /*switch(this.roleConnected) { 
      case "Admin": { 
       
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
   } */



  }



  /*




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












  */




}
