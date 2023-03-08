import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rdv } from 'src/app/models/RDV/rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private http:HttpClient) { }

  chercherAll()
  {
    return this.http.get<Rdv[]>('http://localhost:8015/api/rdvs');
  }


  inserer(rdv:Rdv)
  {
    return this.http.post('http://localhost:8015/api/rdvs',rdv);
  }

  enlever(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/rdvs/${id}`);
  }


  

  parId(id:number)
  {
    return this.http.get<Rdv>(`http://localhost:8015/api/rdvs/${id}`);
  }
}
