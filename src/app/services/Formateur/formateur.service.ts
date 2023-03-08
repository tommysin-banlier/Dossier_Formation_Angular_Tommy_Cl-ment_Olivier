import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formateur } from 'src/app/models/Formateur/formateur';


@Injectable({
  providedIn: 'root'
})
export class FormateurService {


  constructor(private http:HttpClient) { }



  chercherAll() {

    return this.http.get<Formateur[]>("http://localhost:8015/api/formateurs")

  }


  inserer(formateur:Formateur) {

    return this.http.post("http://localhost:8015/api/formateurs", formateur)

  }


  enlever(id:number) {

    return this.http.delete(`http://localhost:8015/api/formateurs/${id}`)

  }


  parId(id:number) {

    return this.http.get<Formateur>(`http://localhost:8015/api/formateurs/${id}`)

  }





}
