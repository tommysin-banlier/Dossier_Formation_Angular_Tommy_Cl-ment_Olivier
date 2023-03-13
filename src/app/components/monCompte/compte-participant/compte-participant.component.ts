import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation/formation';
import { Paiement } from 'src/app/models/Paiement/paiement';
import { Participant } from 'src/app/models/Participant/participant';
import { FormationService } from 'src/app/services/Formation/formation.service';
import { PaiementService } from 'src/app/services/Paiement/paiement.service';
import { ParticipantService } from 'src/app/services/Participant/participant.service';

@Component({
  selector: 'app-compte-participant',
  templateUrl: './compte-participant.component.html',
  styleUrls: ['./compte-participant.component.css']
})
export class CompteParticipantComponent implements OnInit {
  
  constructor(private participantService:ParticipantService, private formationService:FormationService, private paiementService:PaiementService) {}

  participantFormulaire = new Participant;
  id = String(sessionStorage.getItem("idConnected"));
  formations!:Formation[];


  ngOnInit(): void {
    
    this.parId(this.id);
    this.formationsParParticipant(this.id);

  }



  inserer() {
    this.participantService.inserer(this.participantFormulaire).subscribe(
      
    )
  }


  parId(id:string) {
    id = String(sessionStorage.getItem("idConnected"));
    this.participantService.parId(parseInt(id)).subscribe(
      response => this.participantFormulaire = response
    )
  }


  formationsParParticipant(id:string) {
    console.log("dans formationsParParticipant")
    this.formationService.parParticipant(parseInt(id)).subscribe(
      response => 
      {
        this.formations = response;
     /* for (let form of this.formations)
      {
        for()

        let paiement:Paiement
    this.paiementService.parFormationParParticipant(form.id,+id).subscribe(    
      response =>  {
        paiement = response;
        form.paiements=response
      }
    )
      }*/
    }
    )
  }



  paiementParFormationParParticipant(idFormation:number, idParticipant:number) {
    console.log("test")
    let paiement:Paiement
    this.paiementService.parFormationParParticipant(idFormation,idParticipant).subscribe(
      response =>  {
        console.log(response)
        paiement = response;
        return paiement.montant;
      }
    )
   // return 5;
  }




}
