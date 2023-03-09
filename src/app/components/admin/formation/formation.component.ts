import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation/formation';
import { FormationService } from 'src/app/services/Formation/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  
  constructor(private formationService:FormationService, private router:Router) {}

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
      response => {
        this.chercherAll();
        this.formationFormulaire = new Formation;
      }
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

  resetFormulaire() {
    this.formationFormulaire = new Formation;
    window.location.reload();
  }

  afficherParticipants(id:number) {
    this.router.navigateByUrl(`participants-par-formation/${id}`)
  }

  afficherPaiements(id:number) {
    this.router.navigateByUrl(`paiements-par-formation/${id}`)
  }




}
