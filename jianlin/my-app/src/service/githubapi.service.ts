import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable()
// https://api.github.com/users/yuyu7708
export class githubapiService{
  constructor(protected http:HttpClient) {}
  public httpHostUrl="https://api.github.com/";
  public httpOptions = {
    headers: new HttpHeaders({
      'Accept':"application/vnd.github.v3+json",
    })
  };

  public getUser($account){
    return  this.http.get(this.httpHostUrl+'users/'+$account,this.httpOptions)
  }
}

