import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'src/app/models/Commercial/commercial';
import { Personne } from 'src/app/models/Personne/personne';
import { Rdv } from 'src/app/models/RDV/rdv';
import { RdvService } from 'src/app/services/RDV/rdv.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {

  rdvs!:Rdv[];
  rdvFormulaire!:Rdv;
  personne!:Personne;
  commercial!:Commercial;

  ngOnInit()
  {
    this.chercherAll();
    this.rdvFormulaire=new Rdv;
  }

  constructor(private rdvService:RdvService, private router:Router)
{

}

  chercherAll()
  {
    this.rdvService.chercherAll().subscribe(
      response=>this.rdvs=response
    );
  }


  inserer()
  {
    this.rdvService.inserer(this.rdvFormulaire).subscribe(
      response=>this.chercherAll()
    )
  }

  enlever(id:number)
  {
    this.rdvService.enlever(id).subscribe( response=>this.chercherAll()
    );
  }


  

  modifier(id:number)
  {
    this.rdvService.parId(id).subscribe(
      response=> this.rdvFormulaire=response
    )
  }

}
