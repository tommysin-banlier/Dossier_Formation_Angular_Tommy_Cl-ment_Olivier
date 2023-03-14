import { UrlSerializer } from "@angular/router";

export class AuthentificationRequest {

    username!:string;
    password!:string;

    constructor(username?:string, password?:string)
    {
        if(username)
        this.username=username;
        if(password)
        this.password=password;
    }


}
