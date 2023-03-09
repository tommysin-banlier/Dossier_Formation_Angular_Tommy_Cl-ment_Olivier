import { Formateur } from "../Formateur/formateur";
import { Paiement } from "../Paiement/paiement";
import { Participant } from "../Participant/participant";

export class Formation {

    id!:number;
    nom!:string;
    prix!:number;
    dateDebut!:Date;
    dateFin!:Date;

    formateur!:Formateur;
    participants!:Participant[];
    paiements!:Paiement[];




}
