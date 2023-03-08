import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/models/Formateur/formateur';
import { FormateurService } from 'src/app/services/Formateur/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  
  constructor(private formateurService:FormateurService) {}

  formateurs!:Formateur[];
  formateurFormulaire!:Formateur;

  ngOnInit(): void {
    
    this.chercherAll();
    this.formateurFormulaire = new Formateur;

  }



  chercherAll() {
    this.formateurService.chercherAll().subscribe(
      response => this.formateurs = response
    )
  }

  inserer() {
    this.formateurService.inserer(this.formateurFormulaire).subscribe(
      response => this.chercherAll()
    )
  }

  enlever(id:number) {
    this.formateurService.enlever(id).subscribe(
      response => this.chercherAll()
    )
  }

  modifier(id:number) {
    this.formateurService.parId(id).subscribe(
      response => this.formateurFormulaire = response
    )
  }



}
