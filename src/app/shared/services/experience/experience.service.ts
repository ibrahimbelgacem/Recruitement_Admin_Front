import { HttpClient } from '@angular/common/http';
import { PagesComponent } from './../../../pages/pages.component';
import { Injectable } from '@angular/core';
import { Experience } from '../../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url = PagesComponent.urlConfigAdmin + 'candidatures';
  constructor(protected httpClient: HttpClient) { }
   getAll() {
     return this.httpClient.get<Experience[]>(this.url);
   }
   getById(id: number) {
     return this.httpClient.get<Experience>(this.url + '/' + id);
   }

   add(experience: Experience) {
     return this.httpClient.post(this.url, experience);
   }
   update(experience: Experience) {
     return this.httpClient.put(this.url, experience);
   }

   delete(id: Number) {
     return this.httpClient.delete(this.url + '/' + id);
   }
}
