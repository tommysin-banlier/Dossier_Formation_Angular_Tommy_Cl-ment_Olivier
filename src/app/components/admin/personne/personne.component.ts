import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/Personne/personne';
import { PersonneService } from 'src/app/services/Personne/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  constructor(private personneService: PersonneService) {

  }

  personnes!: Personne[];
  personneFormulaire!: Personne;

  ngOnInit(): void {
    this.chercherAll();
    this.personneFormulaire = new Personne;
  }

  chercherAll() {
    this.personneService.chercherAll().subscribe(
      response => this.personnes = response
    )

  }

  inserer() {
    this.personneService.inserer(this.personneFormulaire).subscribe(
      response => {
        this.chercherAll();
        this.personneFormulaire = new Personne;
      }
    )
  }

  enlever(id: number) {
    this.personneService.enlever(id).subscribe(
      response => this.chercherAll()
    )
  }

  modifier(id: number) {
    this.personneService.parId(id).subscribe(
      response => this.personneFormulaire = response
    )
  }

  upgradeUtilisateur(id: number) {
    let personne = new Personne;
    this.personneService.parId(id).subscribe(
      response => {
        personne = response;
        console.log(personne);
      }
    )
    this.personneService.upgradeUtilisateur(id).subscribe(
      response => {
        //alert(`La personne ${personne.nom} ${personne.prenom} devient un utilisateur`);
        alert(`La personne choisis devient un utilisateur`);
        this.chercherAll();
        this.personneFormulaire = new Personne;
      }
    );
  }




}
