import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/Participant/participant';
import { ParticipantService } from 'src/app/services/Participant/participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  
  constructor(private participantService:ParticipantService) {}
  
  participants!:Participant[];
  participantFormulaire!:Participant;
  isModifying = false;
  

  ngOnInit(): void {
   
    this.chercherAll()
    this.participantFormulaire = new Participant;


  }

  
  chercherAll() {
    this.participantService.chercherAll().subscribe(
      response => this.participants = response
    )
  }

  inserer() {
    this.isModifying = false;
    this.participantService.inserer(this.participantFormulaire).subscribe(
      response => {
        this.chercherAll();
        this.participantFormulaire = new Participant;
      }
    )
  }

  enlever(id:number) {
    this.participantService.enlever(id).subscribe(
      response => this.chercherAll()
    )
  }

  modifier(id:number) {
    this.isModifying = true;
    this.participantService.parId(id).subscribe(
      response => this.participantFormulaire = response
    )
  }
  





}
