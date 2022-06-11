import { Candidat } from '../../models/candidat';
import { HttpClient } from '@angular/common/http';
import { PagesComponent } from './../../../pages/pages.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  url = PagesComponent.urlConfigAdmin + 'candidats';
  constructor(protected httpClient: HttpClient) { }
   getAll() {
     return this.httpClient.get<Candidat[]>(this.url);
   }
   getById(id: number) {
     return this.httpClient.get<Candidat>(this.url + '/' + id);
   }

   add(candidat: Candidat) {
     return this.httpClient.post(this.url, candidat);
   }
   update(candidat: Candidat) {
     return this.httpClient.put(this.url, candidat);
   }

   delete(id: Number) {
     return this.httpClient.delete(this.url + '/' + id);
   }
}
