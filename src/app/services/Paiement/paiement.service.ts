import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paiement } from 'src/app/models/Paiement/paiement';


@Injectable({
  providedIn: 'root'
})
export class PaiementService {


  constructor(private http:HttpClient) { }



  chercherAll() {

    return this.http.get<Paiement[]>("http://localhost:8015/api/paiements")

  }


  inserer(paiement:Paiement) {

    return this.http.post("http://localhost:8015/api/paiements", paiement)

  }


  enlever(id:number) {

    return this.http.delete(`http://localhost:8015/api/paiements/${id}`)

  }


  parId(id:number) {

    return this.http.get<Paiement>(`http://localhost:8015/api/paiements/${id}`)

  }


  parFormation(id:number) {

    return this.http.get<Paiement[]>(`http://localhost:8015/api/paiements/formation/${id}`)

  }









}
