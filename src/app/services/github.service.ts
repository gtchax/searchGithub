import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = '86f3f734aa4c534d17a0';
  private client_secret = '5502805bdced0af024b10eb852105c31e5235d42';

  constructor(private _http: Http) { 
    console.log('Github Service Ready...');
    this.username = 'gtchax';
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

}
