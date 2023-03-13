import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'src/app/models/Commercial/commercial';
import { Rdv } from 'src/app/models/RDV/rdv';
import { CommercialService } from 'src/app/services/Commercial/commercial.service';
import { RdvService } from 'src/app/services/RDV/rdv.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

commercials!:Commercial[];
commercialFormulaire!:Commercial;
commercial!:Commercial;
idrdv!: number;
rdvsC!:Rdv[];
rdvco!:Rdv;




ngOnInit()
  {
    
    this.commercialFormulaire=new Commercial;
    this.chercherAll();
    this.ChercherAllRdv();
  }

  constructor(private commercialService:CommercialService, private router:Router, private rdvService:RdvService)
{

}

  chercherAll()
  {
    this.commercialService.chercherAll().subscribe(
      response=>this.commercials=response
    );
  }


  inserer()
  {
    /*this.commercialService.inserer(this.commercialFormulaire).subscribe(
      response=>this.chercherAll()
    )*/

    let rdvco:Rdv=new Rdv();
      
      this.rdvService.parId(this.idrdv).subscribe(
        response=>
        {this.rdvco=response;
      this.commercialFormulaire.rdvC=rdvco;
      this.commercialService.inserer(this.commercialFormulaire).subscribe(
        response=>this.chercherAll()
      );
        }
      )

  }





  enlever(id:number)
  {
    this.commercialService.enlever(id).subscribe( response=>this.chercherAll()
    );
  }


  

  modifier(id:number)
  {
    this.commercialService.parId(id).subscribe(
      response=> this.commercialFormulaire=response
    )
  }

  ChercherAllRdv()
  {
    this.rdvService.chercherAll().subscribe(
      response=>this.rdvsC=response
    )
  }

}
