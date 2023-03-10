import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'src/app/models/Commercial/commercial';
import { Personne } from 'src/app/models/Personne/personne';
import { Rdv } from 'src/app/models/RDV/rdv';
import { CommercialService } from 'src/app/services/Commercial/commercial.service';
import { PersonneService } from 'src/app/services/Personne/personne.service';
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
  personnes!:Personne[];
  commercials!:Commercial[];
  idcommercial!:number;
  idpersonne!:number;

  ngOnInit()
  {
    
    this.rdvFormulaire=new Rdv;
    this.chercherAll();
    this.chercherAllCommercial();
    this.chercherAllPersonne();
  }

  constructor(private rdvService:RdvService, private router:Router, private commercialService:CommercialService, private personneService:PersonneService )
{

}

  chercherAll()
  {
    this.rdvService.chercherAll().subscribe(
      response=>this.rdvs=response
    );
  }


 /* inserer()
  {
    this.rdvService.inserer(this.rdvFormulaire).subscribe(
      response=>this.chercherAll()
    )
  }*/

  inserer()
{

      let commercial:Commercial=new Commercial();
      let personne:Personne=new Personne();
      
      this.commercialService.parId(this.idcommercial).subscribe(
        response=>
        {commercial=response;
      this.rdvFormulaire.commercial=commercial;
      this.rdvService.inserer(this.rdvFormulaire).subscribe(
      );
        }
      )

      this.personneService.parId(this.idpersonne).subscribe(
        response=>
        {
          personne=response;
          this.rdvFormulaire.personne=personne;
          this.rdvService.inserer(this.rdvFormulaire).subscribe(
           );
        }
      )
     

    };

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

  chercherAllCommercial()
  {
    this.commercialService.chercherAll().subscribe(
      response=>this.commercials=response
    );
  }

  chercherAllPersonne()
  {
    this.personneService.chercherAll().subscribe(
      response=>this.personnes=response
    )
  }

}
