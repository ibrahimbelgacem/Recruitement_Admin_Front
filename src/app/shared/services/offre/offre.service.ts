import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagesComponent } from '../../../pages/pages.component';
import { Offre } from '../../models/offre.model';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  url = PagesComponent.urlConfigAdmin + 'offres';
  constructor(protected httpClient: HttpClient) { }
   getAll() {
     return this.httpClient.get<Offre[]>(this.url);
   }
   getById(id: number) {
     return this.httpClient.get<Offre>(this.url + '/' + id);
   }

   add(offre: Offre) {
     return this.httpClient.post(this.url, offre);
   }
   update(offre: Offre) {
     return this.httpClient.put(this.url, offre);
   }
   demandeDetail(offre: Offre) {
    return this.httpClient.put(this.url, offre.validationResponsable);
  }
   delete(id: Number) {
     return this.httpClient.delete(this.url + '/' + id);
   }
}
