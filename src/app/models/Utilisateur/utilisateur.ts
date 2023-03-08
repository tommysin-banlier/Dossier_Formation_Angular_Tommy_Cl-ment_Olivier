import { Personne } from "../Personne/personne";
import { Role } from "../Role/role";

export class Utilisateur extends Personne{

    username!:string;
    password!:string;
    role!:Role;

    

}
