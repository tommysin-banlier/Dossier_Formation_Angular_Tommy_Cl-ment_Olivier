import { Component , OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/Utilisateur/utilisateur';
import { UtilisateurService } from 'src/app/services/Utilisateur/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

  constructor(private utilisateurService:UtilisateurService){

  }

  utilisateurs!:Utilisateur[];
  utilisateurFormulaire!:Utilisateur;

  ngOnInit(): void {
   this.chercherAll();
   this.utilisateurFormulaire = new Utilisateur;
  }

  chercherAll()
  {
    this.utilisateurService.chercherAll().subscribe(
      response => this.utilisateurs = response
    )
    
  }

  inserer()
  {
    this.utilisateurService.inserer(this.utilisateurFormulaire).subscribe(
response => this.chercherAll()
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
