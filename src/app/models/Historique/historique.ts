import { Commercial } from "../Commercial/commercial";
import { Personne } from "../Personne/personne";


export class Historique {


        id!:number;
        date!:Date;
        commentaire!:string;
        personne!:Personne;
        commercial!:Commercial;
       
    
        
}
