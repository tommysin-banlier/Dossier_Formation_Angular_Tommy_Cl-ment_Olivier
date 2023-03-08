import { Formation } from "../Formation/formation";
import { Participant } from "../Participant/participant";

export class Paiement {

    id!:number;
    montant!:number;
    formation!:Formation;
    participant!:Participant;


}
