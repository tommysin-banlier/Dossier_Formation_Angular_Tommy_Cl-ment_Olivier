import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paiements-par-formation',
  templateUrl: './paiements-par-formation.component.html',
  styleUrls: ['./paiements-par-formation.component.css']
})
export class PaiementsParFormationComponent implements OnInit{
  
  constructor(private route:ActivatedRoute) {}

  idFormation!:number
  

  ngOnInit(): void {
    
    this.idFormation = this.route.snapshot.params['id'];
    
  

  }











}
