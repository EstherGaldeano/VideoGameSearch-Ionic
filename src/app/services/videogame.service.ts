
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '', 
}
 
@Injectable({
  providedIn: 'root'
})
export class VideogameService {
  url = '/games';
  apiKey = 'youtIGDBAPIKey'; 
 

  constructor(private http: HttpClient) { }
 

 searchData(name: string): Observable<any> {
   var reqOptions = {
     headers: new HttpHeaders()
   }

   var body = `search: "${name.replace(/\"/g, "\\\"")}"; fields name, cover.url,aggregated_rating; limit 50;`
    
   reqOptions.headers = reqOptions.headers.append("user-key", this.apiKey);

  return this.http.post(`${this.url}`, body, reqOptions);
}
 
 
  getDetails(id) {

    var reqOptions = {
      headers: new HttpHeaders()
    }

    reqOptions.headers = reqOptions.headers.append("user-key", this.apiKey);

    return this.http.get(`${this.url}/${id}?fields=name,cover.url,platforms.name,genres.name,platforms.platform_logo.url,aggregated_rating,summary`, reqOptions);

  }
}
