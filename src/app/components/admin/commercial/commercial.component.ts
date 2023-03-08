import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'src/app/models/Commercial/commercial';
import { Rdv } from 'src/app/models/RDV/rdv';
import { CommercialService } from 'src/app/services/Commercial/commercial.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

commercials!:Commercial[];
commercialFormulaire!:Commercial;
commercial!:Commercial;



ngOnInit()
  {
    this.chercherAll();
    this.commercialFormulaire=new Commercial;
  }

  constructor(private commercialService:CommercialService, private router:Router)
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
    this.commercialService.inserer(this.commercialFormulaire).subscribe(
      response=>this.chercherAll()
    )

    /*let rdv:Rdv=new Rdv();

      this.commercialService.parId(this.idrdv).subscribe(
        response=>
        {rdv=response;
      this.commercial.rdvs=rdv;
      this.commercialService.inserer(this.rdv).subscribe(
        response=>this.chercherAll()
      )*/

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

}
