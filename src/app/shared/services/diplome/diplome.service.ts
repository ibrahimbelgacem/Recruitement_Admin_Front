import { Diplome } from './../../models/diplome';
import { HttpClient } from '@angular/common/http';
import { PagesComponent } from './../../../pages/pages.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  url = PagesComponent.urlConfigAdmin + 'diplomes';
  constructor(protected httpClient: HttpClient) { }
   getAll() {
     return this.httpClient.get<Diplome[]>(this.url);
   }
   getById(id: number) {
     return this.httpClient.get<Diplome>(this.url + '/' + id);
   }

   add(diplome: Diplome) {
     return this.httpClient.post(this.url, diplome);
   }
   update(diplome: Diplome) {
     return this.httpClient.put(this.url, diplome);
   }

   delete(id: Number) {
     return this.httpClient.delete(this.url + '/' + id);
   }
}
