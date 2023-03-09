import { Component, OnInit } from '@angular/core';
import { Paiement } from 'src/app/models/Paiement/paiement';
import { PaiementService } from 'src/app/services/Paiement/paiement.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  
  constructor(private paiementService:PaiementService) {}

  paiements!:Paiement[];
  paiementFormulaire!:Paiement;

  ngOnInit(): void {
    
    this.chercherAll();
    this.paiementFormulaire = new Paiement;
    
  }



  chercherAll() {
    this.paiementService.chercherAll().subscribe(
      response => this.paiements = response
    )
  }

  inserer() {
    this.paiementService.inserer(this.paiementFormulaire).subscribe(
      response => this.chercherAll()
    )
  }

  enlever(id:number) {
    this.paiementService.enlever(id).subscribe(
      response => this.chercherAll()
    )
  }

  modifier(id:number) {
    this.paiementService.parId(id).subscribe(
      response => this.paiementFormulaire = response
    )
  }





}
