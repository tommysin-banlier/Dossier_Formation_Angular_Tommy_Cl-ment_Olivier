import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from 'src/app/models/Utilisateur/utilisateur';
import { AuthentificationRequest } from 'src/app/models/authentification-request';
import { AuthentificationResponse } from 'src/app/models/authentification-response';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  i!:number;

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

  parUsername(username:string)
  {
    return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateursUsername/${username}`)
  }

  upgradeParticipant(id:number)
  {
    return this.http.post(`http://localhost:8015/api/upgradeParticipant/${id}`,null);
  }

  upgradeCommercial(id:number)
  {
    return this.http.post(`http://localhost:8015/api/upgradeCommercial/${id}`,null);
  }

  upgradeFormateur(id:number)
  {
    return this.http.post(`http://localhost:8015/api/upgradeFormateur/${id}`,null);
  }



//Partie Authentification service (le mieux à mettre dans une autre classe service)
  authentification(authentificationRequest:AuthentificationRequest)
  {
    return this.http.post<AuthentificationResponse>('http://localhost:8015/api/loginUserJwt',authentificationRequest);
    let utilisateurs = this.http.get<Utilisateur[]>('http://localhost:8015/api/utilisateurs');
   // for(this.i=0;this.i<utilisateurs.length)
    
    
    /*

     chercherall -> utilisateurs
     for(int ect)
     if (authentiRequest.username == utilisateur[i].username)
     {
     Utilisateurs[i].role.nom -> sessionStorage("roleConnected")
     }
*/

  }

  createBasicAuth(username:string,password:string)
  {
    //let username="Test";
    //let password="1234";
    let basicAuth='Basic '+window.btoa(username+':'+password);
    return basicAuth;
  }



}
