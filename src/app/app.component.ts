import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppFormation';

  constructor(private router:Router) {}



  ngOnInit(): void {

    
  }





  afficherMonCompte() {
    let id = String(sessionStorage.getItem("idConnected"));
    this.router.navigateByUrl(`mon-compte/${id}`);
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigateByUrl(`login`);
  }







}
