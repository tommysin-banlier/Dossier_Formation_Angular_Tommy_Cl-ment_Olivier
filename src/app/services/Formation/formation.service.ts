import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formation } from 'src/app/models/Formation/formation';


@Injectable({
  providedIn: 'root'
})
export class FormationService {


  constructor(private http:HttpClient) { }



  chercherAll() {

    return this.http.get<Formation[]>("http://localhost:8015/api/formations")

  }


  inserer(formation:Formation) {

    return this.http.post("http://localhost:8015/api/formations", formation)

  }


  enlever(id:number) {

    return this.http.delete(`http://localhost:8015/api/formations/${id}`)

  }


  parId(id:number) {

    return this.http.get<Formation>(`http://localhost:8015/api/formations/${id}`)

  }


  parParticipant(id:number) {
    return this.http.get<Formation[]>(`http://localhost:8015/api/formations/participant/${id}`)
  }



}
