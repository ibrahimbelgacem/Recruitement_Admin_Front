import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagesComponent } from '../../pages.component';
import { Emballage} from './emballage-model';

@Injectable({
  providedIn: 'root'
})
export class EmballageService {

  url = PagesComponent.urlConfigAdmin + 'conditionings';
   constructor(protected httpClient: HttpClient) { }
    getAll() {
      return this.httpClient.get<Emballage[]>(this.url);
    }
    getById(id: number) {
      return this.httpClient.get<Emballage>(this.url + '/' + id);
    }
    getByPacking(packing: string) {
      return this.httpClient.get<string>(this.url + '/' + packing);
    }
    add(emballage: Emballage) {
      return this.httpClient.post(this.url, emballage);
    }
    update(emballage: Emballage) {
      return this.httpClient.put(this.url + '/' + emballage.id, emballage);
    }
    delete(id: Number) {
      return this.httpClient.delete(this.url + '/' + id);
    }
}
