import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})

export class MonCompteComponent implements OnInit {
  
  roleConnected!:string;

  ngOnInit(): void {
   
    this.getRoleConnected()


  }


  getRoleConnected() {
   
    let roleConstante = sessionStorage.getItem("roleConnected");
    if(roleConstante !== null) {
      this.roleConnected = roleConstante;
    }
  }





}
