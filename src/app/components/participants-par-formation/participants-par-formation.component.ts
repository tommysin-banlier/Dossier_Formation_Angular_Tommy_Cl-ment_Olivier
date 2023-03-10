import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/Formation/formation';
import { Participant } from 'src/app/models/Participant/participant';
import { FormationService } from 'src/app/services/Formation/formation.service';
import { ParticipantService } from 'src/app/services/Participant/participant.service';

@Component({
  selector: 'app-participants-par-formation',
  templateUrl: './participants-par-formation.component.html',
  styleUrls: ['./participants-par-formation.component.css']
}) 
export class ParticipantsParFormationComponent implements OnInit {
  
  constructor(private participantService:ParticipantService, private formationService:FormationService ,private route:ActivatedRoute) {}

  idFormation!:number;
  participants!:Participant[];
  formation!:Formation;
  
  ngOnInit(): void {
    
    this.formation = new Formation();
    this.idFormation = this.route.snapshot.params['id'];
    this.infosFormation(this.idFormation);
    this.parFormation(this.idFormation);
    

  }
 

  parFormation(id:number) {
    this.participantService.parFormation(id).subscribe(
      response => this.participants = response
    )
  }

  retirer(idParticipant:number, idFormation:number) {
                                                                              // DO TO
  }

  infosFormation(id:number) {
    this.formationService.parId(id).subscribe(
      response => this.formation = response
    )
  }












}
