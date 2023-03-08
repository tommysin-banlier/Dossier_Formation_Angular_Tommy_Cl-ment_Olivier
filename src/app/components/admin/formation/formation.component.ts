import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation/formation';
import { FormationService } from 'src/app/services/Formation/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  
  constructor(private formationService:FormationService) {}

  formations!:Formation[];
  formationFormulaire!:Formation;

  ngOnInit(): void {
    
    this.chercherAll();
    this.formationFormulaire = new Formation;

  }



  chercherAll() {
    this.formationService.chercherAll().subscribe(
      response => this.formations = response
    )
  }

  inserer() {
    this.formationService.inserer(this.formationFormulaire).subscribe(
      response => this.chercherAll()
    )
  }

  enlever(id:number) {
    this.formationService.enlever(id).subscribe(
      response => this.chercherAll()
    )
  }

  modifier(id:number) {
    this.formationService.parId(id).subscribe(
      response => this.formationFormulaire = response
    )
  }






}
