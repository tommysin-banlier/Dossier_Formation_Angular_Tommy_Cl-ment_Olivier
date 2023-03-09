import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/Role/role';
import { RoleService } from 'src/app/services/Role/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private roleService:RoleService){

  }

  roles!:Role[];
  roleFormulaire!:Role;

  ngOnInit(): void {
   this.chercherAll();
   this.roleFormulaire = new Role;
  }

  chercherAll()
  {
    this.roleService.chercherAll().subscribe(
      response => this.roles = response
    )
    
  }

  inserer()
  {
    this.roleService.inserer(this.roleFormulaire).subscribe(
response => {this.chercherAll();
  this.roleFormulaire = new Role;
}
    )
  }

  enlever(id:number)
  {
    this.roleService.enlever(id).subscribe(
      response => this.chercherAll()
    )
  }

  modifier(id:number)
  {
    this.roleService.parId(id).subscribe(
      response => this.roleFormulaire = response
    )
  }

}
