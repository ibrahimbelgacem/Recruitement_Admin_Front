import { Condidature } from './../../models/condidature';
import { HttpClient } from '@angular/common/http';
import { PagesComponent } from './../../../pages/pages.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  url = PagesComponent.urlConfigAdmin + 'candidatures';
  constructor(protected httpClient: HttpClient) { }
   getAll() {
     return this.httpClient.get<Condidature[]>(this.url);
   }
   getById(id: number) {
     return this.httpClient.get<Condidature>(this.url + '/' + id);
   }

   add(condidature: Condidature) {
     return this.httpClient.post(this.url, condidature);
   }
   update(condidature: Condidature) {
     return this.httpClient.put(this.url, condidature);
   }
   
   delete(id: Number) {
     return this.httpClient.delete(this.url + '/' + id);
   }
}
