import { Personne } from "../Personne/personne";
import { Rdv } from "../RDV/rdv";
import { Utilisateur } from "../Utilisateur/utilisateur";

export class Commercial extends Utilisateur {
    rdvsC!: Rdv[];
    commentaire!:string;
    rdvC!:Rdv;
   
}
