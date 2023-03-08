import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from 'src/app/models/Role/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }


  chercherAll()
  {
    return this.http.get<Role[]>('http://localhost:8015/api/roles')
  }
  
  enlever(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/roles/${id}`);
  }
  
  inserer(p:Role)
  {
   return this.http.post('http://localhost:8015/api/roles',p);
  }
  
  parId(id:number)
  {
    return this.http.get<Role>(`http://localhost:8015/api/roles/${id}`);
  }
}
