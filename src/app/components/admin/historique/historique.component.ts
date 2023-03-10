import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'src/app/models/Commercial/commercial';
import { Historique } from 'src/app/models/Historique/historique';
import { Personne } from 'src/app/models/Personne/personne';
import { Rdv } from 'src/app/models/RDV/rdv';
import { CommercialService } from 'src/app/services/Commercial/commercial.service';
import { HistoriqueService } from 'src/app/services/Historique/historique.service';
import { PersonneService } from 'src/app/services/Personne/personne.service';

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
  personnes!:Personne[];
  commercials!:Commercial[];
  date!:Date;
  commentaire!:string;
  idpersonne!:number;
  idcommercial!:number;


  


  ngOnInit()
  {
    this.historiqueFormulaire=new Historique;
   /* this.personne=new Personne;
    this.commercial= new Commercial;*/
    this.chercherAll();
    this.chercherAllCommercial();
    this.chercherAllPersonne();
 

  }

  constructor(private historiqueService:HistoriqueService, private router:Router,private personneService:PersonneService, private commercialService:CommercialService)
{

}

  chercherAll()
  {
    this.historiqueService.chercherAll().subscribe(
      response=>this.historiques=response
    );
  }


  /*inserer()
  {
    this.historiqueService.inserer(this.historiqueFormulaire).subscribe(
      response=>this.chercherAll()
    )
  }*/

inserer()
{

      let commercial:Commercial=new Commercial();
      let personne:Personne=new Personne();
      /*console.log(this.idcommercial);
      console.log(this.idpersonne);*/
      this.commercialService.parId(this.idcommercial).subscribe(
        response=>
        {commercial=response;
      this.historiqueFormulaire.commercial=commercial;
      this.historiqueService.inserer(this.historiqueFormulaire).subscribe(
      );
        }
      )

      this.personneService.parId(this.idpersonne).subscribe(
        response=>
        {
          personne=response;
          this.historiqueFormulaire.personne=personne;
          this.historiqueService.inserer(this.historiqueFormulaire).subscribe(
           );
        }
      )
     

    };

  

 

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
