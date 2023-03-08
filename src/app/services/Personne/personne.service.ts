import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personne } from 'src/app/models/Personne/personne';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http:HttpClient) { }


chercherAll()
{
  return this.http.get<Personne[]>('http://localhost:8015/api/personnes')
}

enlever(id:number)
{
  return this.http.delete(`http://localhost:8015/api/personnes/${id}`);
}

inserer(p:Personne)
{
 return this.http.post('http://localhost:8015/api/personnes',p);
}

parId(id:number)
{
  return this.http.get<Personne>(`http://localhost:8015/api/personnes/${id}`);
}




}
