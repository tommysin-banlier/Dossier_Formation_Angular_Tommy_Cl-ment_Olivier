import { Rdv } from "../RDV/rdv";
import { Utilisateur } from "../Utilisateur/utilisateur";

export class Personne {

    id!:number;
    nom!:string;
    prenom!:string;
    email!:string;
    age!:number;
    personne_type!:string;
    rdvs!:Rdv[];
    utilisateur!:Utilisateur;
    



}
