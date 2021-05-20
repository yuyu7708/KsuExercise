import { Component, OnInit } from '@angular/core';
import {githubapiService} from "../../../service/githubapi.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-resource-api',
  templateUrl: './resource-api.component.html',
  styleUrls: ['./resource-api.component.css']
})
export class ResourceApiComponent implements OnInit {

  constructor(private api:githubapiService,private http:HttpClient) { }

  ngOnInit() {
    this.getUserProfile('yuyu7708');
  }

  private profile = null;

  public setUserProfile(response){
    this.profile={
      'account':response.login,
      'follower': {
        'total': response.followers,
        'followers':this.getfollowers(response.followers_url)
      }
    }

    console.log('setUserProfile',this.profile)
  }

  public getUserProfile(account: string) {
    this.api.getUser(account).subscribe(response=>{
      console.log('getUserProfile',response)
      this.setUserProfile(response);
    })
  }
  public getfollowers(request) {
   this.http.get(request).subscribe(response=>{
     console.log('getfollowers',response)
    this.profile.follower.followers=response;
   })
  }

}
