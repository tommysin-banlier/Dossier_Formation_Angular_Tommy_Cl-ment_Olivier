import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationRequest } from 'src/app/models/authentification-request';
import { Utilisateur } from 'src/app/models/Utilisateur/utilisateur';
import { UtilisateurService } from 'src/app/services/Utilisateur/utilisateur.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

constructor(private service:UtilisateurService, private router:Router)
{}

  username!: string;
  password!:string;
  usernom!:Utilisateur;

  ngOnInit(): void{

   this.username="";
  this.password="";
  }

  Authentification()
  {
    let ar:AuthentificationRequest=new AuthentificationRequest(this.username,this.password)
    this.service.authentification(ar).subscribe( //auth(this.username,this.password
      response=> //contient token jwt
      {
        console.log("Authentification ok");
        console.log(response.jwt);
        //let basicAuth=this.service.createBasicAuth(this.username,this.password);
        //sessionStorage.setItem("basicAuth",basicAuth);
        
        //ici ajouter informatio à utiliser, ajouter déconnexion, ajouter et stocker info de l'username a ayant l'autorisation
        sessionStorage.setItem('token','Bearer '+response.jwt);
        sessionStorage.setItem('username',ar.username);

        //appel de la fonction pour insérer username + sessionStorage.setItem
       this.service.parUsername(ar.username).subscribe(
        response=>
        {
          console.log(response);
          this.usernom=response;
          sessionStorage.setItem('roleConnected',this.usernom.role.nom);
       console.log(this.usernom.role.nom);

        })
       
        //this.router.navigateByUrl('afficherPersonnes');

      },
      erreur =>
      {
        console.log('Authentification non ok"')
        this.username="";
        this.username="";
      } 
    )

  }
  

}
