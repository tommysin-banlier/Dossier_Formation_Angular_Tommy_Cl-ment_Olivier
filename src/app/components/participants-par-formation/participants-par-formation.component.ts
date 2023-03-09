import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/models/Participant/participant';
import { ParticipantService } from 'src/app/services/Participant/participant.service';

@Component({
  selector: 'app-participants-par-formation',
  templateUrl: './participants-par-formation.component.html',
  styleUrls: ['./participants-par-formation.component.css']
}) 
export class ParticipantsParFormationComponent implements OnInit {
  
  constructor(private participantService:ParticipantService ,private route:ActivatedRoute) {}

  idFormation!:number;
  participants!:Participant[];
  
  
  ngOnInit(): void {
    
    this.idFormation = this.route.snapshot.params['id'];
    
    this.parFormation(this.idFormation);


  }





  parFormation(id:number) {
    this.participantService.parFormation(id).subscribe(
      response => this.participants = response
    )
  }















}
