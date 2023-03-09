import { Component , OnInit } from '@angular/core';
import { Role } from 'src/app/models/Role/role';
import { Utilisateur } from 'src/app/models/Utilisateur/utilisateur';
import { RoleService } from 'src/app/services/Role/role.service';
import { UtilisateurService } from 'src/app/services/Utilisateur/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

  constructor(private utilisateurService:UtilisateurService, private roleService:RoleService){

  }

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

  chercherAll()
  {
    this.utilisateurService.chercherAll().subscribe(
      response => this.utilisateurs = response
    )
    
  }

  chercherAllRole()
  {
    this.roleService.chercherAll().subscribe(
      response => this.roles = response
    )
  }

  inserer()
  {
    let roleFormulaire:Role = new Role();
    this.roleService.parId(this.idrole).subscribe(
      response=>
  {roleFormulaire=response;
    this.utilisateurFormulaire.role=roleFormulaire;
    this.utilisateurService.inserer(this.utilisateurFormulaire).subscribe();
    this.utilisateurFormulaire = new Utilisateur;
    this.chercherAll();
  }
    )
  }

  enlever(id:number)
  {
    this.utilisateurService.enlever(id).subscribe(
      response => this.chercherAll()
    )
  }

  modifier(id:number)
  {
    this.utilisateurService.parId(id).subscribe(
      response => this.utilisateurFormulaire = response
    )
  }

}
