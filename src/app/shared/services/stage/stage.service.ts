import { HttpClient } from '@angular/common/http';
import { PagesComponent } from './../../../pages/pages.component';
import { Stage } from './../../models/stage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  url = PagesComponent.urlConfigAdmin + 'stages';
  constructor(protected httpClient: HttpClient) { }
   getAll() {
     return this.httpClient.get<Stage[]>(this.url);
   }
   getById(id: number) {
     return this.httpClient.get<Stage>(this.url + '/' + id);
   }

   add(stage: Stage) {
     return this.httpClient.post(this.url,stage);
   }
   update(stage: Stage) {
     return this.httpClient.put(this.url, stage);
   }

   delete(id: Number) {
     return this.httpClient.delete(this.url + '/' + id);
   }
}
