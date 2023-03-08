import { Utilisateur } from "../Utilisateur/utilisateur";

export class Role {

    id!:number;
    nom!:string;
    utilisateurs!:Utilisateur[];
    
}
