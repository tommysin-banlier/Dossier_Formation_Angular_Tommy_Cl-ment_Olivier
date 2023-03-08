import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from 'src/app/models/Utilisateur/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }


  chercherAll()
  {
    return this.http.get<Utilisateur[]>('http://localhost:8015/api/utilisateurs')
  }
  
  enlever(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/utilisateurs/${id}`);
  }
  
  inserer(p:Utilisateur)
  {
   return this.http.post('http://localhost:8015/api/utilisateurs',p);
  }
  
  parId(id:number)
  {
    return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateurs/${id}`);
  }
}
