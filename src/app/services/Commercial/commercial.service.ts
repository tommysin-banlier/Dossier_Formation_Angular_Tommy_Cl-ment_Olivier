import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commercial } from 'src/app/models/Commercial/commercial';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  constructor(private http:HttpClient) { }

  chercherAll()
  {
    return this.http.get<Commercial[]>('http://localhost:8015/api/commercials');
  }


  inserer(commercial:Commercial)
  {
    return this.http.post('http://localhost:8015/api/commercials',commercial);
  }

  enlever(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/commercials/${id}`);
  }


  

  parId(id:number)
  {
    return this.http.get<Commercial>(`http://localhost:8015/api/commercials/${id}`);
  }
}
