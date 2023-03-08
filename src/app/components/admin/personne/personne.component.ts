import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/Personne/personne';
import { PersonneService } from 'src/app/services/Personne/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  constructor(private personneService:PersonneService){

  }

  personnes!:Personne[];
  personneFormulaire!:Personne;

  ngOnInit(): void {
   this.chercherAll();
   this.personneFormulaire = new Personne;
  }

  chercherAll()
  {
    this.personneService.chercherAll().subscribe(
      response => this.personnes = response
    )
    
  }

  inserer()
  {
    this.personneService.inserer(this.personneFormulaire).subscribe(
response => this.chercherAll()
    )
  }

  enlever(id:number)
  {
    this.personneService.enlever(id).subscribe(
      response => this.chercherAll()
    )
  }

  modifier(id:number)
  {
    this.personneService.parId(id).subscribe(
      response => this.personneFormulaire = response
    )
  }




}
