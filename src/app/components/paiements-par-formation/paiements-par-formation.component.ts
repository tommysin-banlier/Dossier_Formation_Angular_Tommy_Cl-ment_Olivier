import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation/formation';
import { Paiement } from 'src/app/models/Paiement/paiement';
import { FormationService } from 'src/app/services/Formation/formation.service';
import { PaiementService } from 'src/app/services/Paiement/paiement.service';

@Component({
  selector: 'app-paiements-par-formation',
  templateUrl: './paiements-par-formation.component.html',
  styleUrls: ['./paiements-par-formation.component.css']
})
export class PaiementsParFormationComponent implements OnInit{
  
  constructor(private paiementService:PaiementService, private formationService:FormationService ,private route:ActivatedRoute) {}

  idFormation!:number;
  paiements!:Paiement[];
  formation!:Formation;
  

  ngOnInit(): void {
    
    this.formation = new Formation();
    this.idFormation = this.route.snapshot.params['id'];
    this.infosFormation(this.idFormation);
    this.parFormation(this.idFormation);


  }




  parFormation(id:number) {
    this.paiementService.parFormation(id).subscribe(
      response => this.paiements = response
    )
  }

  infosFormation(id:number) {
    this.formationService.parId(id).subscribe(
      response => this.formation = response
    )
  }







}
