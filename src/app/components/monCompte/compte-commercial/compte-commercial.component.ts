import { Component , OnInit } from '@angular/core';
import { Commercial } from 'src/app/models/Commercial/commercial';
import { CommercialService } from 'src/app/services/Commercial/commercial.service';

@Component({
  selector: 'app-compte-commercial',
  templateUrl: './compte-commercial.component.html',
  styleUrls: ['./compte-commercial.component.css']
})
export class CompteCommercialComponent implements OnInit{

  constructor(private commercialService:CommercialService){}

commercialFormulaire!:Commercial;
id = String(sessionStorage.getItem("idConnected"));


  ngOnInit(): void {
    
  }

inserer()
{
this.commercialService.inserer(this.commercialFormulaire).subscribe( 
)
}

parId(id:string)
{
  id = String(sessionStorage.getItem("idConnected"));
  this.commercialService.parId(parseInt(id)).subscribe(
    response => this.commercialFormulaire = response
  )
}

}
