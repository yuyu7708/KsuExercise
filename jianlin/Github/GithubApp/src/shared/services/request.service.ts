import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


export class RequestService {

  /**
   * 請求伺服器
   */
  public apiUrl:string;

  constructor(
    private http: HttpClient
  ){
    this.apiUrl=environment.apiUrl;
  }

  public get(action: string, params: Record<string, any> = {}): Observable<any> {

    let httpParams=new HttpParams();


    return this.get(`${this.apiUrl+action}`,{
      header:{},
      params:{}
    })
  }


}
