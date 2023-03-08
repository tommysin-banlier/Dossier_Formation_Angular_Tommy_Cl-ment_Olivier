import { Injectable } from '@angular/core';
import { Historique } from 'src/app/models/Historique/historique';
import{HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HistoriqueService {

  constructor(private http:HttpClient) { }

  chercherAll()
  {
    return this.http.get<Historique[]>('http://localhost:8015/api/historiques');
  }


  inserer(historique:Historique)
  {
    return this.http.post('http://localhost:8015/api/historiques',historique);
  }

  enlever(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/historiques/${id}`);
  }


  

  parId(id:number)
  {
    return this.http.get<Historique>(`http://localhost:8015/api/historiques/${id}`);
  }


}
