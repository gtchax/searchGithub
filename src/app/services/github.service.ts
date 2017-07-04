import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { config } from '../../../env/config';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = config.client_id;
  private client_secret = config.client_secret;

  constructor(private _http: Http) { 
    console.log('Github Service Ready...');
    this.username = config.client_name;
  }

  getUser(){
    let url = 'http://api.github.com/users/';
    return this._http.get(url +this.username+'?client_id='+this.client_id+'&client_secrect='+this.client_secret)
      .map(res =>res.json());
  }

   getRepos(){
    let url = 'http://api.github.com/users/';
    return this._http.get(url +this.username+'/repos?client_id='+this.client_id+'&client_secrect='+this.client_secret)
      .map(res =>res.json());
  }

  updateUser(username:string){
    this.username = username;
  }
    

}
