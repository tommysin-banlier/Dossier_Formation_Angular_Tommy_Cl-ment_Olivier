import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'src/app/models/Commercial/commercial';
import { Historique } from 'src/app/models/Historique/historique';
import { Personne } from 'src/app/models/Personne/personne';
import { HistoriqueService } from 'src/app/services/Historique/historique.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  historiques!:Historique[];
  historiqueFormulaire!:Historique;
  personne!:Personne;
  commercial!:Commercial;
  


  ngOnInit()
  {
    this.historiqueFormulaire=new Historique;
    this.chercherAll();
  }

  constructor(private historiqueService:HistoriqueService, private router:Router)
{

}

  chercherAll()
  {
    this.historiqueService.chercherAll().subscribe(
      response=>this.historiques=response
    );
  }


  inserer(historiqueFormulaire:Historique)
  {
    this.historiqueService.inserer(this.historiqueFormulaire).subscribe(
      response=>this.chercherAll()
    )
  }

  enlever(id:number)
  {
    this.historiqueService.enlever(id).subscribe( response=>this.chercherAll()
    );
  }


  

  modifier(id:number)
  {
    this.historiqueService.parId(id).subscribe(
      response=> this.historiqueFormulaire=response
    )
  }





}
