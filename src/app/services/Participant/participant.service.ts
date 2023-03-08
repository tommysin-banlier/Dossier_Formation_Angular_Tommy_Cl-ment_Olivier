import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from 'src/app/models/Participant/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {


  constructor(private http:HttpClient) { }


  
  chercherAll() {

    return this.http.get<Participant[]>("http://localhost:8015/api/participants")

  }


  inserer(participant:Participant) {

    return this.http.post("http://localhost:8015/api/participants", participant)

  }


  enlever(id:number) {

    return this.http.delete(`http://localhost:8015/api/participants/${id}`)

  }


  parId(id:number) {

    return this.http.get<Participant>(`http://localhost:8015/api/participants/${id}`)

  }



}
